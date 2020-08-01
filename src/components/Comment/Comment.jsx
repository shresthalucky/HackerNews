import React from 'react';

import { itemUrl } from '../../api/endpoints';
import { repliesPerLoad } from '../../constants';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      activeReplies: [],
      loadReplies: false,
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

    if (!this.state.loadReplies) {
      this.setState({
        loadReplies: !this.state.loadReplies,
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
      <div>
        {this.state.isLoading ? 'loading' :
          <div>
            <p>{this.state.data.type}</p>
            {this.state.data.kids && <button onClick={this.toggleReplies}>Replies</button>}

            <div style={this.state.showReplies ? { 'display': 'block' } : { 'display': 'none' }}>
              {this.state.loadReplies && this.state.activeReplies.map(id => <Comment id={id} key={id} />)}
              <button onClick={this.loadReplies} disabled={this.state.allRepliesLoaded}>More Replies</button>
            </div>

          </div>
        }
      </div>
    )
  }
}

export default Comment;