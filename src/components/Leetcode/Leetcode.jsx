import React from 'react';
import "./LeetCode.css";

const LeetCode = () => {
  return (
    <section className="leetcode" id="coding">
      <h2>Coding Journey</h2>
      <div className="leetcode-container">
        <div className="stats-card">
          <div className="stat-item">
            <span className="count">200+</span>
            <span className="label">Problems Solved</span>
          </div>
          <div className="stat-item">
            <span className="count">Easy/Medium</span>
            <span className="label">Focus Area</span>
          </div>
          <div className="stat-item">
            <span className="count">Consistent</span>
            <span className="label">Daily Streak</span>
          </div>
        </div>

        <div className="leetcode-info">
          <p>
            I actively solve data structures and algorithms problems on <strong>LeetCode</strong> to sharpen my problem-solving skills and logic building. 
          </p>
          <a href="https://leetcode.com/u/nikitaagg01/" target="_blank" className="leetcode-btn">
            View My LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;