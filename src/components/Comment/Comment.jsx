import React from 'react';

import { itemUrl } from '../../api/endpoints';
import { repliesPerLoad } from '../../constants';
import withLoading from '../../hoc/withLoading';
import Post from '../Comment/Post';

const EnhancedPost = withLoading(Post);

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      activeReplies: [],
      initialLoad: false,
      showReplies: false,
      allRepliesLoaded: false,
    }
  }

  componentDidMount() {
    this.getComment();
  }

  getComment = () => {
    fetch(itemUrl(this.props.id))
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: { ...data },
          isLoading: false,
        })
      });
  }

  toggleReplies = () => {

    if (!this.state.initialLoad) {
      this.setState({
        initialLoad: true,
      }, this.loadReplies);
    }

    this.setState({
      showReplies: !this.state.showReplies,
    });

  }

  loadReplies = () => {
    const endIndex = this.state.activeReplies.length + repliesPerLoad;

    this.setState({
      activeReplies: [...this.state.data.kids.slice(0, endIndex)]
    }, () => {

      if (this.state.data.kids.length === this.state.activeReplies.length) {
        this.setState({
          allRepliesLoaded: true
        });
      }

    });
  }

  render() {

    return (
      <EnhancedPost
        isLoading={this.state.isLoading}
        data={this.state.data}
        toggleReplies={this.toggleReplies}
        activeReplies={this.state.activeReplies}
        showReplies={this.state.showReplies}
        initialLoad={this.state.initialLoad}
        loadReplies={this.loadReplies}
        allRepliesLoaded={this.state.allRepliesLoaded}
      />
    )
  }
}

export default Comment;