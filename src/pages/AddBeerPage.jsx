import React, { useState } from 'react';
import axios from 'axios';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      };
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
      alert('Beer added successfully!');
      
    } catch (error) {
      alert('Failed to add the beer. Please check the form data.');
    }
  };

  return (
    
    <div className="form-container">
    <form onSubmit={handleFormSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      
      <label>Tagline:</label>
      <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
      
      <label>Description:</label>
      <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      
      <label>First Brewed:</label>
      <input type="text" name="first_brewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
      
      <label>Brewer's Tips:</label>
      <input type="text" name="brewers_tips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />
      
      <label>Attenuation Level:</label>
      <input type="number" name="attenuation_level" value={attenuationLevel} onChange={(e) => setAttenuationLevel(Number(e.target.value))} />
      
      <label>Contributed By:</label>
      <input type="text" name="contributed_by" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />
      
      <div className='center'>
      <button type="submit">Add Beer</button>
      </div>
    </form>
    </div>
  );
}

export default AddBeerPage;

