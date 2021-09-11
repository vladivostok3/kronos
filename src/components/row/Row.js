import React from "react";
import Cell from '../cell/Cell';
import './Row.css'

const concatenateWithId = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", 
"C16", "C17", "C18", "C19", "C20", "C21", "C22", "C23", "C24", "C25", "C26", "C27", ]

const Row = (props) => {
    return(
        <div className="row_child" id={props.id} >
            {
                concatenateWithId.map(cId => {
                    return <Cell id={props.id+cId} mode={props.mode} />
                })
            }
            
            {/* <Cell id={props.id+"C1"} mode={props.mode} />
            <Cell id={props.id+"C2"} mode={props.mode} />
            <Cell id={props.id+"C3"} mode={props.mode} />
            <Cell id={props.id+"C4"} mode={props.mode} />
            <Cell id={props.id+"C5"} mode={props.mode} />
            <Cell id={props.id+"C6"} mode={props.mode} />
            <Cell id={props.id+"C7"} mode={props.mode} />
            <Cell id={props.id+"C8"} mode={props.mode} />
            <Cell id={props.id+"C9"} mode={props.mode} />
            <Cell id={props.id+"C10"} mode={props.mode} />
            <Cell id={props.id+"C11"} mode={props.mode} />
            <Cell id={props.id+"C12"} mode={props.mode} />
            <Cell id={props.id+"C13"} mode={props.mode} />
            <Cell id={props.id+"C14"} mode={props.mode} />
            <Cell id={props.id+"C15"} mode={props.mode} />
            <Cell id={props.id+"C16"} mode={props.mode} />
            <Cell id={props.id+"C17"} mode={props.mode} />
            <Cell id={props.id+"C18"} mode={props.mode} />
            <Cell id={props.id+"C19"} mode={props.mode} />
            <Cell id={props.id+"C20"} mode={props.mode} />
            <Cell id={props.id+"C21"} mode={props.mode} />
            <Cell id={props.id+"C22"} mode={props.mode} />
            <Cell id={props.id+"C23"} mode={props.mode} />
            <Cell id={props.id+"C24"} mode={props.mode} />
            <Cell id={props.id+"C25"} mode={props.mode} />
            <Cell id={props.id+"C26"} mode={props.mode} />
            <Cell id={props.id+"C27"} mode={props.mode} /> */}


        </div>
    )
}
export default Row;