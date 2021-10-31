import React from 'react';


const SearchBox = ({onSearch}) => {

    return (
        <div >
            <input onChange={onSearch} className="pa3 ba b--green bg-lightest-blue" type="search" name="" id="" />
        </div>
    )
}


export default SearchBox;