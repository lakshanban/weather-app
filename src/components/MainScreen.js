import React, { useState } from "react";
import {  } from "@material-ui/icons";
import {Button, TextField} from "@material-ui/core";
import "./main.css"

export const MainScreen = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return <div>
        <div style={{marginTop: '5vh'}}> 
        <h2 style={{marginBottom: '10vh'}}>{city? `Results for ${city}`: "Find weather in your city"}</h2>
            <TextField className="textField" variant="outlined" style={{width: '20vw', marginRight: '5vw'}} label="City" onChange={(e)=>{setCity(e.target.value)}}/>
            <TextField className="textField" variant="outlined" style={{width: '20vw'}} label="Country" onChange={(e)=>{setCountry(e.target.value)}}/> <br />
            <Button style={{backgroundColor: 'green', marginTop: '10vh', color: 'white', width: '15vw'}}>Search</Button>
        </div>

        <div style={{marginTop:'10vh', borderWidth:'100px', borderColor:'grey'}}>
            <h1>Results</h1>
        </div>
    </div>
}