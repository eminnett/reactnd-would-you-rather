import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserRank from '../components/UserRank';

const LeaderboardPage = (props) => (
  <div className="section-wrapper">
    <section>
      <h1>Leaderboard</h1>
      <div className="section-body-wrapper">
        { props.users.map((user) =>
            <UserRank key={user.id} user={user} />
        )}
      </div>
    </section>
  </div>
);

function mapStateToProps ({ currentUser: currentUserId, users }) {
  const score = (u) => Object.keys(u.answers).length + u.questions.length;
  const sortedIds = Object.keys(users).sort((a,b) => score(users[b]) - score(users[a]));

  return {
    users: sortedIds.map((id) => (
      {...users[id], name: (currentUserId === id ? "You" : users[id].name)}
    ))
  };
}

export default withRouter(connect(mapStateToProps)(LeaderboardPage));
