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
    <div className="container">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-6xl text-primary-700">Jobi Guides</h3>
        <Link
          to="/"
          className="mt-10 inline-block rounded-3xl bg-primary-300 px-10 py-3"
        >
          Explore More
        </Link>
      </div>
      {/* Articles */}
      <div className="mt-16 grid grid-cols-3 gap-14">
        {articles.map((article, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="h-64 bg-secondary-500">
                <img src={article.image} alt="" />
              </div>
              <div className="mt-9 text-black text-opacity-40">
                {article.category}
              </div>
              <div className="mt-3 text-2xl font-bold">{article.title}</div>
              <div className="mt-4 font-bold">
                <span className="font-medium text-black text-opacity-30">
                  By{' '}
                </span>
                {article.author}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobiGuidesSection
