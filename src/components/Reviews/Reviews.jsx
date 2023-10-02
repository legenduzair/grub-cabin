import React from 'react'
import SubHeading from '../Subheading/SubHeading';
import data from '../../constants/data';
import images from '../../constants/images'

import './Reviews.css'

const Reviews = () => {
  return (
    <div className='app__bg flex__center section__padding awards-outer' id='awards'>
        <div className="app__wrapper_info awards-inner">
            <SubHeading title="Testimony" />
            <h1 className='awards-title'>Customer Reviews</h1>
        </div>

        <div className="app__reviews">
          <div className="app__reviews-inner">
            <div className="app__reviews-inner_reviews">
              {data.reviews.map((review) => (
                <div className="app__reviews-inner_review" key={review.excerpt}>
                  <h3 className='review-excerpt'>{review.excerpt}</h3>
                  <p className='review-copy'>{review.copy}</p>
                  <p className='review-author'>{review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews