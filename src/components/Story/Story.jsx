import React from 'react';

import { itemUrl } from '../../api/endpoints';
import withLoading from '../../hoc/withLoading';
import Post from './Post';
import { commentsPerLoad } from '../../constants';

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

  toggleComments = () => {

    if (!this.state.initialLoad) {
      this.setState({
        initialLoad: true,
      }, this.loadComments);
    }

    this.setState({
      showComments: !this.state.showComments,
    });

  }

  loadComments = () => {
    const endIndex = this.state.activeComments.length + commentsPerLoad;

    this.setState({
      activeComments: [...this.state.data.kids.slice(0, endIndex)]
    }, () => {

      if (this.state.data.kids.length === this.state.activeComments.length) {
        this.setState({
          allCommentsLoaded: true
        });

      }
    });

  }

  render() {
    return (
      <EnhancedPost
        isLoading={this.state.isLoading}
        data={this.state.data}
        toggleComments={this.toggleComments}
        activeComments={this.state.activeComments}
        showComments={this.state.showComments}
        initialLoad={this.state.initialLoad}
        loadComments={this.loadComments}
        allCommentsLoaded={this.state.allCommentsLoaded}
      />
    )
  }
}

export default Story;