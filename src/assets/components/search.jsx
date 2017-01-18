import React from 'react';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount() {
							
	}					

	searchLabel(){
		$.ajax({
		    url: 'http://imdb.wemakesites.net/api/search?' + $.param({q: this.refs.nameFilm.value}),
		    headers: {
		        ContentType: 'application/x-www-form-urlencoded'
		    },
		    crossDomain: true,
		    data: {
		        api_key: 'e9f5e114-a4cb-48f0-8498-b73ed6be7ccc'
		    },
		    dataType: 'jsonp',
		    success: function(response) {
		    	this.props.onSearch(response.data.results);
		    }.bind(this)
		});
	}


	render() {
		return (
			<div style={{width: 300}}>
				<label className="">Search: </label>
				<input type="text" ref="nameFilm" className="form-control"/>
				<button style={{color: '#ffffff', backgroundColor: '#29C6CD'}} onClick={() => this.searchLabel()} className="form-control btn btn-info">Search</button>
			</div>
		)
	}

}