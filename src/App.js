import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useState } from 'react';

function App() {


  const [ boards , setBoards ] = useState();
  const [ fans , setFans ] = useState(false);
  const [ lights , setLights ] = useState(false);
  const [ ac , setAc ] = useState(false);
  const [ fansCount , setFansCount ] = useState();
  const [ lightsCount , setLightsCount ] = useState();
  const [ acCount , setAcCount ] = useState();


  const handleClick = () => {
    console.log("Switchboards selected :" + boards);
    console.log("Fans : "+fansCount);
    console.log("Lights : "+lightsCount);
    console.log("AC : "+acCount);
  }

  const handleOption1 = () => {
    setFans(!fans);
  }
  const handleOption2 = () => {
    setLights(!lights);
  }
  const handleOption3 = () => {
    setAc(!ac);
  }

  return (
    <div className="App" style={{ borderRadius: "1rem"  ,boxShadow : "0 0 10px rgba(0,0,0,0.3)", padding: "2rem", width: "50vw" , height : "75vh" , margin : "3rem auto"}}>
      <div id="switchboards">
      <TextField type="number" label="Switchboard" onChange={(e) => setBoards(e.target.value)} value={boards} required autoComplete='off'/>
      <br />
      <br />
      <Checkbox checked={fans} onClick={handleOption1}/>
      <Typography > Fans </Typography>
      {fans ? <TextField type="number" label="Count" onChange={(e) => setFansCount(e.target.value)} value={fansCount} required autoComplete='off' /> : null}
      <br />
      <Checkbox checked={lights} onClick={handleOption2}/>
      <Typography> Lights </Typography>
      {lights ? <TextField type="number" label="Count" onChange={(e) => setLightsCount(e.target.value)} value={lightsCount} required autoComplete='off' /> : null}
      <br />
      <Checkbox checked={ac} onClick={handleOption3}/>
      <Typography> AC </Typography>
      {ac ? <TextField type="number" label="Count" onChange={(e) => setAcCount(e.target.value)} value={acCount} required autoComplete='off' /> : null}
      <br />
      <br />
      <Button variant="contained" onClick={handleClick}> Submit </Button>
      </div>
    </div>
  );
}

export default App;
