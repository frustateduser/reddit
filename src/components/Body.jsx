import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSearchResults } from "../features/searchReddit/searchRedditSlice";

function Body() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearchResults("popular"));
    }, [dispatch]);
    const { searchTerm, searchResults } = useSelector((state) => state.searchReddit);

    const posts = Array.isArray(searchResults?.data?.children)
        ? searchResults.data.children
        : [];

    return (
        <>
            <h1 className="text-5xl antialiased md:subpixel-antialiased m-auto text-center p-6 italic">{searchTerm?`Sub Reddit - ${searchTerm}`:"Welcome, what's on your mind today?" }</h1>
            {posts.length === 0 && searchTerm !== "" ? (
                <div className="text-center p-50 m-10 rounded-lg border-4 border-red-500 text-red-500 bg-red-100">No posts found.</div>
            ) : (
                <ul>
                    {posts.map((p) => (
                        <li key={p.data.id}>
                            
                            <a href={p.data.url} target="_blank" rel="noopener noreferrer">
                                <div className="p-3 m-4 border-2 border-cyan-600 bg-cyan-100 ">
                                    <h6 className="font-bold text-blue-600 hover:underline">{p.data.title}</h6>
                                    <p className="text-sm italic text-gray-500">Posted by u/{p.data.author} | Score: {p.data.score} | {new Date(p.data.created * 1000).toLocaleDateString()}</p>
                                    <p>{p.data.selftext}</p>
                                    {p.data.thumbnail !== "self"?(<img src={p.data.thumbnail} alt="thumbnail" className="max-w-xs mt-2"/>):null}
                                    <p className="italic font-bold text-gray-500">{p.data.ups} Upvotes | {p.data.downs} Downvotes</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Body;