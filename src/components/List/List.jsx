import React from 'react';

import Story from '../Story';

function List({ stories, ...props }) {
  return (
    <div>
      <div className="stories-list">
        {stories.map(id => <Story id={id} key={id} />)}
      </div>

      <button className="btn stories-list__btn"
        onClick={props.handleLoadMoreStories}
        disabled={props.allStoriesLoaded}>
        {props.allStoriesLoaded ? 'No More Stories' : 'More Stories'}
      </button>

    </div>
  )
}

export default List;