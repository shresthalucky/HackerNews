import React from 'react';

import { commentsPerLoad } from '../../constants';
import { itemUrl } from '../../api/endpoints';
import Post from '../../components/Story/Post';
import Comment from '../../components/Comment';
import withLoading from '../../hoc/withLoading';

const EnhancedStory = withLoading(Post);

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      activeComments: [],
      allCommentsLoaded: false
    }
  }

  componentDidMount() {
    this.getStory();
  }

  getStory = () => {
    fetch(itemUrl(this.props.match.params.storyId))
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: { ...data },
          isLoading: false,
        }, () => {
          if (this.state.data.kids) {
            this.loadComments()
          } else {
            this.setState({ allCommentsLoaded: true });
          }
        });
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
        <EnhancedStory
          isLoading={this.state.isLoading}
          data={this.state.data}
          type="story"
        />

        {this.state.activeComments.map(id => <Comment id={id} key={id} />)}

        <button
          className="btn"
          onClick={this.loadComments}
          disabled={this.state.allCommentsLoaded}>
          {this.state.allCommentsLoaded ? 'No More Comments' : 'More Comments'}
        </button>
      </div>
    )
  }
}

export default Detail;