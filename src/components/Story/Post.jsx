import React from 'react';
import { Link } from 'react-router-dom';

function Post({ data, ...props }) {
  return (
    <div>
      <Link to={`/${data.id}`}>{data.title}</Link>
      <div>
        <span>By {data.by}</span>
        <span>{data.kids ? data.kids.length : '0'} comments</span>
      </div>
    </div>
  )
}

export default Post;