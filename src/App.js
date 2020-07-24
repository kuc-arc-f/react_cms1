import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Navbar from './component/Navbar';
import Head from './component/Layouts/Head';
import About from './component/About';
import Home from './component/Home';
import Show from './component/Show';
import Test from './component/Test';

//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Head />
            <Route exact path='/' component={Home}/>
            <Route path="/show/:id" component={Show} />
            <Route path='/about' component={About}/>

            <Route path='/test' component={Test}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
