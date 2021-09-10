import React from "react";
import Cell from '../cell/Cell';
import './Row.css'

const Row = (props) => {
    return(
        <div className="row_child" id={props.id} >
            <Cell id={props.id+"C1"} />
            <Cell id={props.id+"C2"} />
            <Cell id={props.id+"C3"} />
            <Cell id={props.id+"C4"} />
            <Cell id={props.id+"C5"} />
            <Cell id={props.id+"C6"} />
            <Cell id={props.id+"C7"} />
            <Cell id={props.id+"C8"} />
            <Cell id={props.id+"C9"} />
            <Cell id={props.id+"C10"} />
            <Cell id={props.id+"C11"} />
            <Cell id={props.id+"C12"} />
            <Cell id={props.id+"C13"} />
            <Cell id={props.id+"C14"} />
            <Cell id={props.id+"C15"} />
            <Cell id={props.id+"C16"} />
            <Cell id={props.id+"C17"} />
            <Cell id={props.id+"C18"} />
            <Cell id={props.id+"C19"} />
            <Cell id={props.id+"C20"} />
            <Cell id={props.id+"C21"} />
            <Cell id={props.id+"C22"} />
            <Cell id={props.id+"C23"} />
            <Cell id={props.id+"C24"} />
            <Cell id={props.id+"C25"} />
            <Cell id={props.id+"C26"} />
            <Cell id={props.id+"C27"} />


        </div>
    )
}
export default Row;