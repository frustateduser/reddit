import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults, setSearchTerm } from '../searchReddit/searchRedditSlice';
import { clearHistory } from './searchHistorySlice';

function SearchHistory({ trigger }) {
  const triggerEl = trigger || <button>Trigger</button>;
  const history = useSelector((state) => state.searchHistory.history);
  const dispatch = useDispatch();

  return (
    <Popup trigger={triggerEl} position="left center" className="p-0">
      {(close) => (
        <div className="p-4 m-2 bg-white rounded-lg shadow-lg w-56 sm:w-72 md:w-96">
          <div className="flex items-center justify-between mb-2">
            <p className="font-extrabold text-sm sm:text-base">History</p>
            <button
              className="text-xs text-gray-500 hover:text-gray-700"
              onClick={() => { dispatch(clearHistory()); }}
            >
              Clear
            </button>
          </div>

          {(!history || history.length === 0) ? (
            <p className="text-sm text-gray-500">No history found.</p>
          ) : (
            <ul className="max-h-64 overflow-auto divide-y divide-gray-100">
              {history.map((term, index) => (
                <li
                  key={index}
                  className="py-2 px-2 hover:bg-gray-50 rounded cursor-pointer text-sm"
                  onClick={() => {
                    dispatch(fetchSearchResults(term));
                    dispatch(setSearchTerm(term));
                    close();
                  }}
                >
                  {term}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Popup>
  );
}

export default SearchHistory;