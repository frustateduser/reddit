import SearchReddit from "../features/searchReddit/SearchReddit";
import SearchHistory from "../features/searchHistory/SearchHistory";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-3 m-4 border border-gray-300">
        {/* Left: Title (compact on small screens) */}
        <div className="flex items-center w-full sm:w-auto">
          <h1 className="hidden sm:block italic text-[#ff3e02] font-[1000] px-4 mx-4 text-lg">
            Reddit Lite
          </h1>
          <h1 className="sm:hidden italic text-[#ff3e02] font-[1000] px-2 mx-2 text-base">
            RL
          </h1>
        </div>

        {/* Middle: Search - expands on small screens */}
        <div className="w-full sm:flex-1 sm:mx-4">
          <SearchReddit />
        </div>

        {/* Right: History trigger */}
        <div className="w-auto mt-2 sm:mt-0">
          <SearchHistory
            trigger={
              <div className="my-auto mx-2 cursor-pointer p-1 rounded hover:bg-gray-100" title="Search history" aria-label="Search history">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
            }
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
