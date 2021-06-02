import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import SnowChildQuiz from './SnowChildQuiz';
import LittleRedQuiz from './LittleRedQuiz';
import ChooseYourOwn from './ChooseYourOwn';

const FallBack = (props) => {
  return <div>URL Not Found </div>;
};
const App = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/snowchild" component={SnowChildQuiz} />
          <Route path="/littlered" component={LittleRedQuiz} />
          <Route path="/adventure" component={ChooseYourOwn} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
