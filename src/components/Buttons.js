import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ className, id, color, children, event, animate }) => {
  return (
    <button
      className={className}
      style={{ background: color }}
      onClick={event}
      data-aos={animate}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  // button label: the text that the button displays
  children: PropTypes.node.isRequired,
  // the color prop of the button
  color: PropTypes.string,
  // element class for unique styling
  className: PropTypes.string,
  // click event for the button that gets called when it is clicked
  onClick: PropTypes.func,
}
