import React from "react";
// import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,ComedyMovies,HorrorMovies,Documentaries} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url={originals}  title='Netflix Originals'/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall/>
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall/>
      <RowPost url={Documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
