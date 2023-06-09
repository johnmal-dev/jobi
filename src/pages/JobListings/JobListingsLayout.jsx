import { useContext } from 'react'

import JobCard from '../../components/JobCard'
import AppContext from '../../components/context/AppContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function JobListingsLayout() {
  const { filteredJobs, jobsViewType } = useContext(AppContext)

  return (
    <ul
      className={classNames(
        jobsViewType === 'grid'
          ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
          : 'flex flex-col space-y-6',
        ''
      )}
    >
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <li key={job.key}>
            <JobCard job={job} jobsViewType={jobsViewType} />
          </li>
        ))
      ) : (
        <div className="text-2xl">0 Results</div>
      )}
    </ul>
  )
}
