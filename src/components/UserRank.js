import React from 'react';
import Avatar from './Avatar';

const UserRank = (props) => (
  <div className="component-wrapper">
    <div className="component-body">
      <Avatar size="large" user={props.user} />
      <div className="component-copy rank-body-wrapper">
        <h2>
          {props.user.name}
        </h2>
        <div className="rank-copy">
          Answered <span className="number">{Object.keys(props.user.answers).length}</span> questions
        </div>
        <div className="rank-copy">
          Asked <span className="number">{props.user.questions.length}</span> questions
        </div>
      </div>
      <div className="score-wrapper">
        <div className="score-label">
          Score
        </div>
        <div className="score">
          {Object.keys(props.user.answers).length + props.user.questions.length}
        </div>
      </div>
    </div>
  </div>
);

export default UserRank;
