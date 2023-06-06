/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import style from './App.module.css';


const Pokemon = ( {data} ) => {
    const [details, setDetails] = useState(null);
  
    
    useEffect(()=> {
      axios.get(data.url)
      .then((res) => setDetails(res.data))
      .catch(() => console.log("Error to load details"))
    },[])
  
    if (details === null){
      return (
        <Fragment>Carregando...</Fragment>
      )
    }
  
    return (
      <Fragment>
        <div className={style.pokemon}>
          <img src={details.sprites.front_default} alt="Figura do Pokémon" width="200px"/>
          <p>{details.name} - {details.base_experience}</p>
        </div>
      </Fragment>
    )
  }

export default Pokemon;