import React from 'react';
import { Search } from './search.jsx';
import { GridMovies } from './grid_movies.jsx'

export class ContainerLogic extends React.Component {
	constructor(){
        super();
        this.state = {
            contador:0
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
   //  	setTimeout(() => {
			// this.setState({
			// 	name: this.props.name
			// })
   //  	}, 3000)
    }

    componentWillUpdate(nextProps, nextState) {
    	
    }

    componentDidUpdate(prevProps, prevState) {
    	
    }

    componentWillUnmount() {
    	
    }
    handleSearch(data){
    	this.setState(
    		{
    			moviesData: data
    		})
    }
    render() {
    	
        return (
            <div style={{padding: 30}}>
	            <div>
	            	<Search onSearch={this.handleSearch.bind(this)}/>	
	            	<GridMovies movies={this.state.moviesData}/>
	            </div>
            </div>

        )
    }
}