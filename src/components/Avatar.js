import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => (
  <div className={"avatar-wrapper " + props.size}>
    <div className="avatar">
      <img src={props.user.avatarURL} alt="user avatar"/>
    </div>
  </div>
);

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  user: PropTypes.object.isRequired
};

export default Avatar;
