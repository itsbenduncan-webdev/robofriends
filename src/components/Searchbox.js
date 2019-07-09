import React from 'react';

function Searchbox({ searchChange }) {
    return (
        <div className='pa2'>
            <input 
                className='tc'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;