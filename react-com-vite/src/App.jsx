import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import style from './App.module.css';
import Navbar from './NavBar.jsx';


function App() {
  const [list, setList] = useState([]);
  const [pokemonList, setpokemonList] = useState(0);

  const previewPokemonListHandler = () => {
    setpokemonList(prev => prev - 20);
}

const nextPokemonListHandler = () => {
    setpokemonList(prev => prev + 20);
    console.log(pokemonList)
}

  
useEffect(()=>{
    let URL = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonList}&limit=20`
    axios.get(URL)
    .then((res)=> {return (setList(res.data.results))
    }).catch(() => console.log("Error to load Pokemon's list"))
  },[pokemonList])

  return (
    <Fragment>
      <div className={style.body}>
        <header>
          <h1 className={style.h1}>Lista de Pokemons</h1>
          <Navbar nextList={nextPokemonListHandler} previewList={previewPokemonListHandler}/>
        </header>
        <section className={style.container}>
        {list.map(item => {
      return (<Pokemon key={item.name} data={item}/>)})}
        </section>
      </div>
    </Fragment>
  );
}

export default App;
