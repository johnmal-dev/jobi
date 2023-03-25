import JobCard from '../JobCard'

export default function JobsGridSection({ jobsList }) {
  console.log(jobsList)
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {jobsList.map((job) => (
        <JobCard job={job} key={job.key} />
      ))}
    </ul>
  )
}
