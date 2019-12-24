import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

{/* 1. Stateless, Child, Dumb, Presentational Component
    2. Backtick ` sign
    withRouter is a higher order component
*/}
const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => (
      <div 
      style={{
          backgroundImage: `url(${imageUrl})`,

      }}
      className={`${size} menu-item`}
      onClick = { () => history.push(`${match.url}${linkUrl}`)}
      >
          <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">{subtitle}</span>
          </div>
      </div>
)

export default withRouter(MenuItem);