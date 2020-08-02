import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route exact path="/:storyId" component={Detail} />
    </Router>
  );
}

export default App;
