import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import withLoading from '../../hoc/withLoading';
import { storiesPerLoad } from '../../constants';
import { fetchStories, fetchStory } from '../../actions/storyActions';

import List from '../../components/List';

const EnchancedList = withLoading(List);

function Home({ stories, storiesDetail, fetchStories, fetchStory, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeStories, setActiveStories] = useState([]);
  const [allStoriesLoaded, setAllStoriesLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchStories().catch(() => setIsError(true));
  }, [fetchStories]);

  useEffect(() => {
    if (stories.length) {
      setIsLoading(false);
    }

    setActiveStories([...stories.slice(0, storiesPerLoad)]);
  }, [stories]);

  useEffect(() => {
    if (stories.length === activeStories.length) {
      setAllStoriesLoaded(true);
    } else {
      setAllStoriesLoaded(false);
    }
  }, [stories, activeStories]);

  const handleLoadMoreStories = useCallback(() => {
    const endIndex = activeStories.length + storiesPerLoad;

    setActiveStories([...stories.slice(0, endIndex)]);
  }, [activeStories, stories]);

  return (
    <EnchancedList
      type="story"
      isLoading={isLoading}
      error={isError}
      stories={activeStories}
      handleLoadMoreStories={handleLoadMoreStories}
      allStoriesLoaded={allStoriesLoaded}
    />
  );
}

const mapStateToProps = ({ story }) => ({
  stories: story.stories,
  storiesDetail: story.storiesDetail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories()),
  fetchStory: (id) => dispatch(fetchStory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
