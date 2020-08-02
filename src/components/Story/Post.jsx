import React from 'react';

import Comment from '../Comment/Comment';

function Post({ data, ...props }) {
  return (
    <div>
      {data.title}
      
      {data.kids &&
        <div>
          <button onClick={props.toggleComments}>Comment</button>

          <div style={props.showComments ? { 'display': 'block' } : { 'display': 'none' }}>
            {props.initialLoad && props.activeComments.map(id => <Comment id={id} key={id} />)}
            <button onClick={props.loadComments} disabled={props.allCommentsLoaded}>More Comments</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Post;