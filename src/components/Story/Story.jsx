import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchStory } from '../../actions/storyActions';

import Post from './Post';
import withLoading from '../../hoc/withLoading';

const EnhancedPost = withLoading(Post);

function Story({ fetchStory, id, storyDetail }) {
  const [isLoading, setIsLoading] = useState(true);
  const [story, setStory] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchStory(id).catch(() => setIsError(true));
  }, [id, fetchStory]);

  useEffect(() => {
    if (storyDetail) {
      setStory({ ...storyDetail });
      setIsLoading(false);
    }
  }, [storyDetail]);

  return (
    <div className="story">
      <EnhancedPost
        type="story"
        error={isError}
        isLoading={isLoading}
        data={story}
      />
    </div>
  );
}

const mapStateToProps = ({ story }, { id }) => ({
  storyDetail: story.storiesDetail[id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchStory: (id) => dispatch(fetchStory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Story);
