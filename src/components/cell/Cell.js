import React from 'react';
import './Cell.css';

const Cell = (props) => {
    //const cellRef = useRef(null);
    const selectStartNode = (id) => {
        //console.log(id)
        const cellDiv = document.getElementById(id)
        cellDiv.style.background = "chartreuse";

    }

    return(
        <div 
            className="cell" 
            onClick={() => {
            selectStartNode(props.id)
            }}
            id={props.id}
        > 
        </div>
    )
}

export default Cell;