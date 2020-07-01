import React from 'react'
import PropTypes from 'prop-types'
export default ProgressBar

function ProgressBar ({ progressPercentage }) {
  return (
    <div id='progress_bar'>
      <div
        id='progress_bar_fill'
        style={{ width: progressPercentage + '%' }}
      />
    </div>
  )
}

ProgressBar.propTypes = {
  progressPercentage: PropTypes.number
}
