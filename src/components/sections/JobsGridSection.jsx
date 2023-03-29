import JobCard from '../JobCard'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

export default function JobsGridSection() {
  const { filteredJobsList, filter } = useContext(AppContext)

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {filteredJobsList.length === 0 && filter ? (
        <div className="text-3xl">No Matches Found</div>
      ) : (
        filteredJobsList.map((job) => (
          <li key={job.key}>
            <JobCard job={job} />
          </li>
        ))
      )}
    </ul>
  )
}
