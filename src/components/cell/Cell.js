import React from 'react';
import './Cell.css';

const Cell = (props) => {
    //const cellRef = useRef(null);
    const selectNode = (id) => {
        //console.log(id)
        const cellDiv = document.getElementById(id)
        if(props.mode == 'start'){
            cellDiv.style.background = "chartreuse";
        }
        if(props.mode == 'end'){
            cellDiv.style.background = "red";
        }
        if(props.mode == 'barrier'){
            cellDiv.style.background = "black";
        }
        
        

    }

    return(
        <div 
            className="cell" 
            onClick={() => {
            selectNode(props.id)
            }}
            id={props.id}
        > 
        </div>
    )
}

export default Cell;