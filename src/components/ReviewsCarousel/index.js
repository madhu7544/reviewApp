import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    let updatedIndex = index
    if (index < reviewsList.length - 1) {
      updatedIndex += 1
    } else {
      updatedIndex = reviewsList.length - 1
    }
    this.setState({index: updatedIndex})
  }

  onLeftArrow = () => {
    const {index} = this.state
    let updatedIndex = index
    if (index > 0) {
      updatedIndex -= 1
    } else {
      updatedIndex = 0
    }
    this.setState({index: updatedIndex})
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="button"
            type="button"
            testId="leftArrow"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onRightArrow}
            testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
