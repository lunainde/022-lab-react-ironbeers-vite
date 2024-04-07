//src/pages/AllBeersPage.jsx
import React from "react";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        //fetch beer data when components mounts.
        const fetchBeers = async () => {
            try {
                //axios => promise to GET data from beer API
                const res = await axios.get(API_URL);
                //if axious = success, setBeers data state updates
                setBeers(res.data);
            } catch (err) {
                //conditional if not = error
                console.log('Error fetching the beers:', error);
            }
        };
        fetchBeers(); //call the f(x) 
    }, []); //initial useState => 1st render in empty []

    //STEP 2 mapping
    
    const beerList = beers.map((beer) => {
        return (
            <div key={beer._id} className="product">
                <div className="product-img">
                    <img src={beer.image_url} alt={beer.name} /> 
                </div>
                <div className="product-content">
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <p><b>Contributed by:</b>{beer.contributed_by}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="center">
            {beerList}
        </div>
    )
}

export default AllBeersPage;
