import React from 'react';

import Comment from '../Comment/Comment';

function Post({ data, ...props }) {
  return (
    <div>
      <div>{data.type}</div>

      {data.kids &&
        <div>
          <button onClick={props.toggleReplies} >Reply</button>
          <div style={props.showReplies ? { 'display': 'block' } : { 'display': 'none' }}>
            {props.initialLoad && props.activeReplies.map(id => <Comment id={id} key={id} />)}
            <button onClick={props.loadReplies} disabled={props.allRepliesLoaded}>More Replies</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Post;