import React from 'react';

import { topStoriesUrl } from '../../api/endpoints';
import Story from '../../components/Story/Story';
import { storiesPerLoad } from '../../constants';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      activeStories: [],
      allLoaded: false
    }

    this.storiesList = [];
  }

  componentDidMount() {
    this.getTopStories();
  }

  getTopStories = () => {
    fetch(topStoriesUrl)
      .then(response => response.json())
      .then(data => {
        this.storiesList = [...data];
        this.loadStories();
      });
  }

  loadStories = () => {
    const endIndex = this.state.activeStories.length + storiesPerLoad;

    this.setState({
      activeStories: [...this.storiesList.slice(0, endIndex)]
    });

    if (this.storiesList.length === this.state.activeStories.length) {
      this.setState({
        allLoaded: true
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.activeStories.map(id => <Story id={id} key={id} />)}

        <button onClick={this.loadStories} disabled={this.state.allLoaded}>More Stories</button>
      </div>
    )
  }
}

export default Home;