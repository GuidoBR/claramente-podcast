import React from 'react'
import './Search.css'

export default props => (
    <div role="form" className="searchForm input-group col-md-12">
        <input 
            id="description" 
            className="form-control" 
            placeholder="Busque um episódio"
            onChange={props.handleChange}
            value={props.description}
        ></input>
        
      <span className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
)