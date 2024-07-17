import React, { useContext } from 'react';
import { Appcontext } from '../App';

export interface ISearchProps {

}

const Search: React.FC<ISearchProps> = () => {
    const { searchQuery, setSearchQuery } = useContext(Appcontext)
    return (
        <div>
            <input
                type="text"
                placeholder='Search for Foods'
                className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

export default Search