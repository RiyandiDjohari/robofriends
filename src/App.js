import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  const filteredRobots = robots.filter(robot => {
    return (
      robot.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setRobots(data));
  }, [])
  

  return (
    <div className="App tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={handleSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} setRobots={setRobots} />
      </Scroll>
    </div>  
  );
}

export default App;
