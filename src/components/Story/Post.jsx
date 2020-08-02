import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMessageSquare, FiLink, FiCalendar } from 'react-icons/fi';

function Post({ data, ...props }) {
  return (
    <div>
      <h2 className="story__title"><Link to={`/${data.id}`}>{data.title}</Link></h2>
      <div className="description story__description">
        <span className="description__by"><FiUser /> <strong>{data.by}</strong></span>
        <span className="description__comments"><FiMessageSquare /> {data.kids ? data.kids.length : '0'}</span>
        <span className="description__time"><FiCalendar /> {new Date(data.time).toLocaleDateString()}</span>
        <span className="description__permalink"><a href={data.url} target="_new" title={data.title}><FiLink /></a></span>
      </div>
    </div>
  )
}

export default Post;