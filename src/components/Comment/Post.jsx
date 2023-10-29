import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { formatDistanceToNowStrict } from 'date-fns';
import { FiUser, FiMessageSquare, FiClock } from 'react-icons/fi';

function Post({ data, ...props }) {
  const postDate = new Date(data.time * 1000);

  return (
    <div className="comment">
      <div className="description comment__description">
        <span className="description__by"><FiUser /> <strong>{data.by}</strong></span>
        <span className="description__comments"><FiMessageSquare /> {data.kids ? data.kids.length : '0'}</span>
        <span className="description__time" title={postDate.toLocaleString()}>
          <FiClock /> {formatDistanceToNowStrict(postDate)} ago
        </span>
      </div>
      {ReactHtmlParser(data.text)}
    </div>
  )
}

export default Post;
