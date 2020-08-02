import React from 'react';

import { itemUrl } from '../../api/endpoints';
import withLoading from '../../hoc/withLoading';
import Post from '../Comment/Post';

const EnhancedPost = withLoading(Post);

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getReplies();
  }

  getReplies = () => {
    fetch(itemUrl(this.props.id))
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: { ...data },
          isLoading: false,
        });
      });
  }

  render() {

    return (
      <div className="comment">
        <EnhancedPost
          isLoading={this.state.isLoading}
          data={this.state.data}
        />

        {this.state.data.kids && this.state.data.kids.map(id => <Comment id={id} key={id} />)}
      </div>
    )
  }
}

export default Comment;