import React, { useEffect, useState } from 'react';
import './Cell.css';

const Cell = (props) => {
    const [selected, setSelected] = useState(false)
    const [role, setRole] = useState("node")
    //const cellRef = useRef(null);
    const selectNode = (id) => {
        //console.log(id)
        const cellDiv = document.getElementById(id)
        let color = ""
        var style;
        if (window.getComputedStyle) {
            style = window.getComputedStyle(cellDiv);
        } else {
            style = cellDiv.currentStyle;
        }
        if (!style) {
            console.log("iscreudup")
        } else {
            //alert(style.backgroundColor);
            color = style.backgroundColor
        }
        if(props.mode == 'start'){
            //console.log(color)
            if(!selected){
                //console.log("here change color to green")
                cellDiv.style.backgroundColor = "chartreuse"
                setSelected(true)
                setRole('start')
            }
            if(selected){
                if(role == 'start'){
                    cellDiv.style.backgroundColor = "rgb(203, 204, 205)"
                    setRole('node')
                    setSelected(false)
                }
            }
        }
        if(props.mode == 'end'){
             //console.log(color)
             if(!selected){
                //console.log("here change color to green")
                cellDiv.style.backgroundColor = "red"
                setSelected(true)
                setRole('end')
            }
            if(selected){
                if(role == 'end'){
                    cellDiv.style.backgroundColor = "rgb(203, 204, 205)"
                    setRole('node')
                    setSelected(false)
                }
            }
        }
        if(props.mode == 'barrier'){
             //console.log(color)
             if(!selected){
                //console.log("here change color to green")
                cellDiv.style.backgroundColor = "black"
                setSelected(true)
                setRole('barrier')
            }
            if(selected){
                if(role == 'barrier'){
                    cellDiv.style.backgroundColor = "rgb(203, 204, 205)"
                    setRole('node')
                    setSelected(false)
                }
            }
        }
        
        if(props.mode == 'clear') {
            if(selected){
                setRole('node')
                setSelected(false)
                cellDiv.style.backgroundColor = "rgb(203, 204, 205)";
            }
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