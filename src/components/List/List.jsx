import React from 'react';

import Story from '../Story';

function List({ list, ...props }) {
  return (
    <div>
      {list.map(id => <Story id={id} key={id} />)}
      <button onClick={props.loadStories} disabled={props.allLoaded}>More Stories</button>
    </div>
  )
}

export default List;