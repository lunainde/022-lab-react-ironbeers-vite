import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {

    const [beer, setBeer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRandomBeer = async () => {
          try {
            const response = await axios.get(API_URL);
            setBeer(response.data);
          } catch (error) {
            setError('No random beer at this time.');
          }
        };
        // part of the try-catch statement to define a block of code to be tested for errors while it's being executed.
    
        getRandomBeer();
      }, []); //to run only once after initial render
    
      if (error) {
        return <div><p>{error}</p></div>;
      }
    
      if (!beer) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className="item-card">
          <div className="item-img">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="item-header">
            <h1>{beer.name}</h1>
            <p>{beer.attenuation_level}</p>
          </div>
          <div className="item-tagline">
            <h3>{beer.tagline}</h3>
            <h5>{beer.first_brewed}</h5>
          </div>
          <p>{beer.description}</p>
          <h5>{beer.contributed_by}</h5>
        </div>
      );
    }
    
    export default RandomBeerPage;
