import React from 'react';
import UserRank from '../components/UserRank';

const LeaderboardPage = () => (
  <div className="section-wrapper">
    <section>
      <h1>Leaderboard</h1>
      <div className="section-body-wrapper">
        <UserRank />
        <UserRank />
        <UserRank />
      </div>
    </section>
  </div>
);

export default LeaderboardPage;
