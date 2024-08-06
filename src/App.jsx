import { useState } from 'react'
import './App.css'

// src/App.jsx

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (fighter.price <= money) {
      setTeam((team)=>{
        const newTeam = [...team, fighter];
        team.length === 0 ? setTotalStrength(fighter.strength) : 
        setTotalStrength(newTeam.reduce((accumulator, member) => accumulator + member.strength,0));
        team.length === 0 ? setTotalAgility(fighter.agility) : 
        setTotalAgility(newTeam.reduce((accumulator, member) => accumulator + member.agility,0));
        return newTeam;
      })
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money!!!');
    }
  }

  const handleRemoveFighter = (deleteItemIndex) => {
    setMoney(money + team[deleteItemIndex].price);
    const newTeam = team.filter((member, index) => index !== deleteItemIndex);
    team.length === 0 ? setTotalStrength(fighter.strength) : 
    setTotalStrength(newTeam.reduce((accumulator, member) => accumulator + member.strength,0));
    team.length === 0 ? setTotalAgility(fighter.agility) : 
    setTotalAgility(newTeam.reduce((accumulator, member) => accumulator + member.agility,0));
    setTeam(newTeam);
    
  }

  return (
    <>
    <h1>your current cash is {money}</h1>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.name}>
          <img src={fighter.img} alt="" />
          <p>Name: {fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>add</button>
        </li>
      ))}
    </ul>
    <h2>Your team members:</h2>
    <h4>Your team strength is : {totalStrength} and agility is: {totalAgility}</h4>
    <ul>
      {team.length === 0 ? <h3>Pick some team members!</h3> : team.map((member, index) => (
        <li key={index}>
        <img src={member.img} alt="" />
        <p>Name: {member.name}</p>
        <p>Price: {member.price}</p>
        <p>Strength: {member.strength}</p>
        <p>Agility: {member.agility}</p>
        <button onClick={() => handleRemoveFighter(index)}>Remove</button>
      </li>
    ))}
    </ul>
    </>
  );
}

export default App
