const formattedDate = (date: Date): string => {
  const options = {
    year: 'numeric',
  } as const

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export { formattedDate }
