import React, {useEffect} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from "react-redux";
import { changeSearchField, getRobots } from '../actions';



const mapStateToProps = (state) => {
	return {
    searchfield: state.searchRobots.searchfield,
    robots: state.fetchRobots.robots,
    error: state.fetchRobots.error,
    isPending: state.fetchRobots.isPending,

	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    handleSearch: (event) => dispatch(changeSearchField(event.target.value)),
    handleFetch: () => dispatch(getRobots())
	};
};


function App(props) {

 
 
  const { searchfield, handleSearch, robots, handleFetch} = props;
  

  useEffect(() => {

    handleFetch();
    
  }, [handleFetch])

  
  

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });


  return (
		<div className="tc">
			<h1 className="light-green f1">ROBOTIC FRIENDS</h1>
			<SearchBox onSearch={handleSearch} />
      <Scroll>
        <ErrorBoundary>
				  <CardList robots={filteredRobots} />
        </ErrorBoundary>
			</Scroll>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
