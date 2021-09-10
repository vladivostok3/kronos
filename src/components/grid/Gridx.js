import React from 'react';
import Row from '../row/Row'
import './Gridx.css';

const Gridx = (props) => {
    //console.log(props.x);
    //console.log(props.y);
    return(
        <div className="gridx_parent">
            <Row id={"R1"} />
            <Row id={"R2"} />
            <Row id={"R3"} />
            <Row id={"R4"} />
            <Row id={"R5"} />
            <Row id={"R6"} />
            <Row id={"R7"} />
            <Row id={"R8"} />
            <Row id={"R9"} />
            <Row id={"R10"} />
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
