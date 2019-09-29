import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Launches from './views/Launches';
import Rocket from './views/Rocket';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Launches}/>
      <Route path="/Launches" component={Launches}/>
      <Route path="/Rocket/:rocket_id" component={Rocket} />
    </div>
  </Router>
);

export default Routes;
