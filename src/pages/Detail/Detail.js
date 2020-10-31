import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { commentsPerLoad } from '../../constants';
import Comment from '../../components/Comment';

import Story from '../../components/Story/Story';

function Detail({ storiesDetail, ...props }) {
  const [comments, setComments] = useState([]);
  const [activeComments, setActiveComments] = useState([]);
  const [allCommentsLoaded, setAllCommentsLoaded] = useState(true);

  const { storyId } = props.match.params;

  useEffect(() => {
    const story = storiesDetail[storyId];
    if (story) {
      setComments(story.kids);
    }
  }, [storiesDetail, storyId]);

  useEffect(() => {
    setActiveComments([...comments.slice(0, commentsPerLoad)]);
  }, [comments]);

  useEffect(() => {
    if (comments.length === activeComments.length) {
      setAllCommentsLoaded(true);
    } else {
      setAllCommentsLoaded(false);
    }
  }, [comments, activeComments]);

  const handleLoadMoreComments = useCallback(() => {
    const endIndex = activeComments.length + commentsPerLoad;

    setActiveComments([...comments.slice(0, endIndex)]);
  }, [activeComments, comments]);

  return (
    <div>
      <Story id={storyId} />

      {activeComments.map((id) => (
        <Comment id={id} key={id} />
      ))}

      <div className="detail-actions">
        <button
          className="btn"
          onClick={handleLoadMoreComments}
          disabled={allCommentsLoaded}
        >
          {allCommentsLoaded ? 'No More Comments' : 'More Comments'}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ story }) => ({
  storiesDetail: story.storiesDetail,
});

export default connect(mapStateToProps)(Detail);
