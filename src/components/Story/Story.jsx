import React from 'react';

import { itemUrl } from '../../api/endpoints';
import Comment from '../Comment/Comment';
import { commentsPerLoad } from '../../constants';

class Story extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      activeComments: [],
      loadComments: false,
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

    if (!this.state.loadComments) {
      this.setState({
        loadComments: !this.state.loadComments,
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
      <div>
        {this.state.isLoading ? 'loading' :
          <div>
            <p>{this.state.data.title}</p>

            <button onClick={this.toggleComments}>Comment</button>

            <div style={this.state.showComments ? { 'display': 'block' } : { 'display': 'none' }}>
              {this.state.loadComments && this.state.activeComments.map(id => <Comment id={id} key={id} />)}
              <button onClick={this.loadComments} disabled={this.state.allCommentsLoaded}>More Comments</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Story;