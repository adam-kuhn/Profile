import React from 'react'

import './star-rating.css'

const StarRating = (props) => {
  const total = [1, 2, 3, 4, 5]
  return (
    <div>
      {total.map(star => {
        if (star <= props.stars) {
          return <span key={star} className = 'fa fa-star checked'></span>
        } else {
          return <span key={star} className = 'fa fa-star'></span>
        }
      })}
    </div>
  )
}

export default StarRating
