import React from 'react'
export default ScoreCard

function ScoreCard () {
  return (
    <div id ="score_card">
      <div id='score_text'>
        <p id="current_score_text">
          67%
        </p>
        <p id="max_score_text">
          75%
        </p>
      </div>
      <div id="score_bar">
        <div id="max_score_fill"></div>
        <div id="current_score_fill"></div>
        <div id="min_score_fill"></div>
      </div>
    </div>
  )
}

