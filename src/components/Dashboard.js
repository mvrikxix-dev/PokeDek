import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import DashboardNavBar from './DashboardNavbar'
import ActionScreen from './ActionScreen'
import { BrowserRouter as Router } from 'react-router-dom';

const Dashboard = (props) => {

    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=11')
        .then(response => response.json())
        .then(pokemons => extractData(pokemons))

        const extractData = (pokemons) => {
            pokemons.results.forEach(pokemon => {
                const url = pokemon.url
                fetch(url)
                .then(response => response.json())
                .then(pokemons => setPokemons(pokemons))
            });
        }
    })

    // const handlePokemonState = (pokemons) => {
    //     setPokemons({...pokemons, pokemons})
    // }

    useEffect(() => {
        console.log(pokemons)
    },[pokemons])

    return (
        <Router>
            <div className="dashboard-container">
                <DashboardNavBar />
                <ActionScreen />
            </div>
        </Router>
    )
}
 
export default Dashboard;