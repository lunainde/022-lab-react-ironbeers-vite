import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(null); // Add an error state
  const { beerId } = useParams();

  useEffect(() => {
    const getBeer = async () => {
      try {
        const response = await axios.get(`${API_URL}/${beerId}`);
        setBeer(response.data);
      } catch (err) {
        setError("Beer not found"); // Set an error message
      }
    };
    getBeer();
  }, [beerId]); // Include beerId

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    ); // Render the error message if there's an error
  }

  if (!beer) {
    return <div>Loading...</div>; // Render a loading state if beer isn't fetched yet
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

export default BeerDetailsPage;
