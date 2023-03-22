import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    image: '',
    category: 'Developer, Code',
    title: 'Print, publishing qui visual layout mockups',
    author: 'Rashed Kabir',
  },
  {
    image: '',
    category: 'Design, Art',
    title: "Designer's checklist for every UX/UI project.",
    author: 'Julie Margot',
  },
  {
    image: '',
    category: 'Solution, Work',
    title: 'Make more productive work flow in fewer steps.',
    author: 'Jubayer Al Hasan',
  },
]

const JobiGuidesSection = () => {
  return (
    <div>
      {/* Top */}
      <div>
        <h3>Jobi Guides</h3>
        <Link to="/">Explore More</Link>
      </div>
      {/* Articles */}
      <div>
        {articles.map((article, index) => {
          return (
            <div key={index}>
              <div>
                <img src={article.image} alt="" />
              </div>
              <div>{article.category}</div>
              <div>{article.title}</div>
              <div>
                By <span>{article.author}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobiGuidesSection
