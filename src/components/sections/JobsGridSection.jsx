import JobCard from '../JobCard'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

export default function JobsGridSection() {
  const { filteredJobs } = useContext(AppContext)

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <li key={job.key}>
            <JobCard job={job} />
          </li>
        ))
      ) : (
        <div className="text-2xl">0 Results</div>
      )}
    </ul>
  )
}
