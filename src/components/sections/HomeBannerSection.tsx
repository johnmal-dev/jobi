import React from 'react'

const HomeBannerSection = () => {
  return (
    <div className="pt-6 bg-palette-800 relative">
      <div className="container">
        {/* Left */}
        <div>
          <h1>Find & Hire Top 3% of expert on jobi.</h1>
          <p>We deliver blazing fast & striking work solutions</p>
          <form onSubmit={() => console.log('submit')}>
            <label>
              What are you looking for?
              <input
                type="text"
                name="descriptionInput"
                id="descriptionInput"
              />
            </label>
            <label>
              Category
              <input type="text" name="categoryInput" id="categoryInput" />
            </label>
            <button>Search</button>
          </form>
          <div>Popular: Design, Art, Business, Video Editing</div>
        </div>
        {/* Right */}
        <div>
          <img src="#" alt="#" />
        </div>
        {/* Background Art */}
        <div className="absolute">hi</div>
      </div>
    </div>
  )
}

export default HomeBannerSection
