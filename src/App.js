import React, { useEffect, useState } from 'react';
import Gridx from './components/grid/Gridx';
import useWindowDimensions from './util/windowhelper';
import { Button } from '@material-ui/core';


//import Canvas from './components/Canvas/Canvas';
import './App.css';


function App() {
  const [mode, setMode] = useState("neutral");


  useEffect(() => {
    console.log(mode)
  })


  // need a 50x30 grid
  // first get window dimensions
  const { height, width } = useWindowDimensions();
  
  // then set cell size 
  const cell_x = width/50;
  const cell_y = height/30;
  // then pass props to grid
  // in grid render cells with id of co-ordinates

  const toggleStartSelect = () =>{
    //console.log("enable start selection mode")
    // make cell hover chartreuse
    if(mode == "start"){
      setMode("neutral")
    } else {
      setMode("start")
    }
    
  }
  const toggleEndSelect = () =>{
    //console.log("enable end selection mode")
    // make cell hover purple
    if(mode == "end"){
      setMode("neutral")
    } else {
      setMode("end")
    }
  }
  const toggleBarrierMode = () =>{
    //console.log("enable barrier mode")
    // make cell hover black
    if(mode == "barrier"){
      setMode("neutral")
    } else {
      setMode("barrier")
    }
  }
  
  const toggleClearSelect = () => {
    
      setMode("clear");
  }

  return (
    <div className="App">
      <Gridx x={50} y={30} cell_x={cell_x} cell_y={cell_y} mode={mode} />
      <div>
        <div>
          <ul>
            <li>
              start node select
            </li>
            <li>
              end node select
            </li>
            <li>
              add barriers
            </li>
            <li>
              run
            </li>
          </ul>
        </div>
      </div>

      <div className="div__modeSelect">
        <Button id="mode__btn" variant="contained" color="primary" onClick={toggleStartSelect}>
          start
        </Button>
        <Button variant="contained" color="secondary" onClick={toggleEndSelect}>
          end
        </Button>
        <Button variant="contained" color = "default" onClick={toggleBarrierMode}>
          barriers
        </Button>
        <Button variant="contained" color="primary">
          go
        </Button>
        <Button variant="contained" color="inherit" onClick = {toggleClearSelect}>
          clear 
        </Button>
      </div>

    </div>
  );
}

export default App;
