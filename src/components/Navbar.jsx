import SearchReddit from "../features/searchReddit/searchReddit";

const Navbar = () => {
  
  return (
    <>
      <nav className="flex flex-row p-3 m-4 border border-gray-300 ">
        <h1 className="italic text-[#ff3e02] font-[1000] px-4 mx-4 ">
          Reddit Lite
        </h1>
        <SearchReddit/>
      </nav>
    </>
  );
};

export default Navbar;
