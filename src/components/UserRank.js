import React from 'react';
import Avatar from './Avatar';

const UserRank = () => (
  <div className="component-wrapper">
    <div className="component-body">
      <Avatar size="large" user={{avatarURL: "/avatars/128_1.png"}} />
      <div className="component-copy rank-body-wrapper">
        <h2>
          User 2
        </h2>
        <div className="rank-copy">
          Answered <span className="number">7</span> questions
        </div>
        <div className="rank-copy">
          Asked <span className="number">3</span> questions
        </div>
      </div>
      <div className="score-wrapper">
        <div className="score-label">
          Score
        </div>
        <div className="score">
          10
        </div>
      </div>
    </div>
  </div>
);

export default UserRank;
