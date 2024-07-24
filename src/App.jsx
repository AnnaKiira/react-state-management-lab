import { useState } from 'react';
import './App.css';

const App = () => {
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState([
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

  let totalTeamStrength = team.reduce((previousStrength, currentStrength) => {
  return previousStrength + currentStrength.added - currentStrength.removed; }, 0);

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price)
    } else {
      console.log('Not enough money')
    }
  }

  return (
    <>
    <h1>Zombie Fighter!</h1>
    <div>Current Money: {money}</div>
    
    {team.length === 0 ? (<div>Pick some team members!</div>) : (
    <ul>
      {team.map((teamFighter) => {
        return (
          <li key={teamFighter.name}>
            <ul>
            <li>Name: {teamFighter.name}</li>
            <li>Price: {teamFighter.price}</li>
            <li>Strength: {teamFighter.strength}</li>
            <li>Agility: {teamFighter.agility}</li>
            <li><img src={teamFighter.img} /></li>
            </ul>
          </li>
        )
      })}
    </ul>
  )}

    <ul>
        {zombieFighters.map((zombieFighter) => {
          return (
          <li key={zombieFighter.name}>
            <ul>
            <li>Name: {zombieFighter.name}</li>
            <li>Price: {zombieFighter.price}</li>
            <li>Strength: {zombieFighter.strength}</li>
            <li>Agility: {zombieFighter.agility}</li>
            <li><img src={zombieFighter.img} /></li>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
            </ul>
          </li>
          )
        })}
    </ul>
    </>
  );
}

export default App