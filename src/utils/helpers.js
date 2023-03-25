const salaryDisplay = (salary) => {
  return salary >= 1000 ? `${Math.floor(salary / 1000)}k` : salary
}

export { salaryDisplay }
