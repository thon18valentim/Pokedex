import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/Card'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    /** 
     * Chama esse função somente quando os elementos
     * estiverem montados
     */
    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endpoints = []
        for(var i = 1;  i<499; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios
            .get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((err) => console.log(err))
    }

    const pokemonFilter = (name) => {
        let filteredPokemons = []
        if (name === ""){
            getPokemons()
        }
        for (var i in pokemons){
            if (pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }
    
    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xg">
                <Grid container  spacing={2}>
                    {pokemons.length === 0 ? 
                    <Skeletons/>
                    : 
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}