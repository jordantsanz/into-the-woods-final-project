/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-screen">
        <div className="home-choices">

          <NavLink to="/snowchild">
            <div className="choice-region" id="home1">
              <h1 className="choice" id="blue">Snow child</h1>
            </div>
          </NavLink>

          <NavLink to="/littlered">
            <div className="choice-region" id="home2">
              <h1 className="choice" id="red">Little Red</h1>
            </div>
          </NavLink>

          <NavLink to="/adventure">
            <div className="choice-region" id="home3">
              <h1 className="choice" id="yellow">Choose your own</h1>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
