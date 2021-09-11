import React from "react";
import Cell from '../cell/Cell';
import './Row.css'

const Row = (props) => {
    return(
        <div className="row_child" id={props.id} >
            <Cell id={props.id+"C1"} mode={props.mode} />
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
            <Cell id={props.id+"C27"} mode={props.mode} />


        </div>
    )
}
export default Row;