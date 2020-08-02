import React from 'react';

import { itemUrl } from '../../api/endpoints';
import withLoading from '../../hoc/withLoading';
import Post from './Post';

const EnhancedPost = withLoading(Post);

class Story extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      activeComments: [],
      initialLoad: false,
      showComments: false,
      allCommentsLoaded: false
    }
  }

  componentDidMount() {
    this.getStory();
  }

  getStory = () => {
    fetch(itemUrl(this.props.id))
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: { ...data },
          isLoading: false,
        })
      });
  }

  render() {
    return (
      <div className="story">
        <EnhancedPost
          type="story"
          isLoading={this.state.isLoading}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Story;