import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import withContainer from './hoc/withContainer';

const EnhancedHome = withContainer(Home);
const EnhancedDetail = withContainer(Detail);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={EnhancedHome} />
      <Route exact path="/:storyId" component={EnhancedDetail} />
    </Router>
  );
}

export default App;
