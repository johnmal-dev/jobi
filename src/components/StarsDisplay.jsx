import React from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs'

const StarsDisplay = ({ rating }) => {
  // create an empty array to hold the star icons
  let stars = []

  // create a loop to generate the star icons
  for (let i = 1; i <= 5; i++) {
    // if the current index is less than or equal to the rating, add a filled star
    if (i <= rating.split(' ')[0]) {
      stars.push(<BsStarFill key={i} />)
    } else {
      // otherwise, add an empty star
      stars.push(<BsStar key={i} />)
    }
  }

  return <>{stars}</>
}

export default StarsDisplay
