import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import DataVisualizer from './views/data-visualizer';
import Home from './views/home';

class App extends Component {
	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/data' component={DataVisualizer} />
			</Layout>
		)
	}
}

export default App;
