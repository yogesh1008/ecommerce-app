import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

{/* 1. Stateless, Child, Dumb, Presentational Component
    2. Backtick ` sign
    withRouter is a higher order component
*/}
const MenuItem = ({heading, subheading, imageUrl, size, history, randomlinkUrl}) => (
      <div 
      style={{
          backgroundImage: `url(${imageUrl})`,

      }}
      className={`${size} menu-item`}>
          <div className="content">
            <div className="title">{heading}</div>
            <span className="subtitle">{subheading}</span>
          </div>
      </div>
)

export default withRouter(MenuItem);