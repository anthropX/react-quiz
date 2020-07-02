import React from 'react'
export default ScoreCard
function ScoreCard ({ maxScore, score, minScore }) {
  function setScoreStyle (width) {
    if (isNaN(width)) return { width: '0%' }
    if (width === 100) {
      return {
        width: width + '%',
        borderTopRightRadius: '0.325rem',
        borderBottomRightRadius: '0.325rem'
      }
    }
    return { width: width + '%' }
  }
  return (
    <div id='score_card'>
      <div id='score_text'>
        <p id='current_score_text'>
          Score: {isNaN(score) ? '0%' : Math.round(score) + '%'}
        </p>
        <p id='max_score_text'>Max Score: {Math.round(maxScore) + '%'}</p>
      </div>
      <div id='score_bar'>
        <div id='max_score_fill' style={setScoreStyle(maxScore)} />
        <div id='current_score_fill' style={setScoreStyle(score)} />
        <div id='min_score_fill' style={setScoreStyle(minScore)} />
      </div>
    </div>
  )
}
