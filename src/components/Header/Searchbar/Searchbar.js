import PropTypes from 'prop-types'
import React, { useState } from "react";

const propTypes ={
    onSearch: PropTypes.func.isRequired
};

function Searchbar(props){
    const [term, setTerm]= useState('');
    const search = () => {
        props.onSearch(term)
    }
    const onKeyDownHandler = (e) => {
        if(e.key === 'Enter'){
            search()
        } 
    }
  
    return (
        <div className="d-flex">
            <div className="form-group col">
                <input 
                    value={term} 
                    onKeyDown={onKeyDownHandler}
                    onChange={e=>setTerm(e.target.value)}
                    className="form-control"  
                    type="text" 
                    placeholder="Szukaj..." />
            </div>
            <div className="col">
                    <button 
                        onClick={search}
                        className=" btn btn-secondary ms-2">
                        Szukaj...
                    </button>
            </div>
        </div>
        );
}

Searchbar.propTypes = propTypes;

export default Searchbar;