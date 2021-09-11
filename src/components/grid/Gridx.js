import React from 'react';
import Row from '../row/Row'
import './Gridx.css';

const rowId = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10"];


const Gridx = (props) => {
    //console.log(props.x);
    //console.log(props.y);
    return(
        <div className="gridx_parent">
            {
                rowId.map(rId => {
                    return <Row id={rId} mode={props.mode} />
                })
            }
            
            {/* <Row id={"R1"} mode={props.mode} />
            <Row id={"R2"} mode={props.mode} />
            <Row id={"R3"} mode={props.mode} />
            <Row id={"R4"} mode={props.mode} />
            <Row id={"R5"} mode={props.mode} />
            <Row id={"R6"} mode={props.mode} />
            <Row id={"R7"} mode={props.mode} />
            <Row id={"R8"} mode={props.mode} />
            <Row id={"R9"} mode={props.mode} />
            <Row id={"R10"} mode={props.mode} /> */}
        </div>
    )
}
export default Gridx;


/*
<ul className="players-ul">
            {props.player_items.map(player => (
                <PlayerItem 
                    key={player.id}
                    id={player.id} 
                    name={player.name} 
                    swins={player.swins}
                    splayed={player.splayed}
                    mwins={player.mwins}
                    isChecked={(e, name) => toggleSelected(e, name)}
                    selected={props.selected}
                />
            ))}
        </ul>
*/
