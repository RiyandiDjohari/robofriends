import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchRobots.searchValue,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}

function App({searchValue, handleSearchChange, robots, onRequestRobots, isPending}) {
  
  const filteredRobots = robots?.filter(robot => {
    return (
      robot.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])
  
  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className="App tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={handleSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>  
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
