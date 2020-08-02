import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function Post({ data, ...props }) {
  return (
    <div>
      {ReactHtmlParser(data.text)}
      <div>
        <span>{data.kids ? data.kids.length : '0'} replies</span>
      </div>
    </div>
  )
}

export default Post;