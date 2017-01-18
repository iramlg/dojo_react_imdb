import React from 'react';

export class GridMovies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount() {
							
	}					

	render() {
		if (this.props.movies === undefined) {
			return (
				<ul>
					<li>Sem resultados</li>
				</ul>
			)
		}

		let rows = [];
		console.log(this.props)
		this.props.movies.titles.map((item,i) => {
			let element = (
				<li key={i}>
					{item.title}
				</li>
			)

			rows.push(element);

		})


		return (
			<ul>
				{rows}
			</ul>
		)
	}

}