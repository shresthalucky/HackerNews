import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchComment } from '../../actions/commentActions';

import Post from './Post';
import withLoading from '../../hoc/withLoading';

const EnhancedPost = withLoading(Post);

function Comment({ fetchComment, id, commentDetail, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchComment(id).catch(() => setIsError(true));
  }, [id, fetchComment]);

  useEffect(() => {
    if (commentDetail) {
      setComment({ ...commentDetail });
      setIsLoading(false);
    }
  }, [commentDetail]);

  return (
    <div className="comment-wrapper">
      <EnhancedPost
        type="comment"
        error={isError}
        isLoading={isLoading}
        data={comment}
      />

      {comment.kids && comment.kids.map(id => <ConnectedComment id={id} key={id} />)}
    </div>
  );
}

const mapStateToProps = ({ comment }, { id }) => ({
  commentDetail: comment.comments[id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchComment: (id) => dispatch(fetchComment(id)),
});

const ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default ConnectedComment;
