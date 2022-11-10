const formattedRating = (rating) => {
  if (rating === 0) return '-'
  if (rating.toString().length === 1) return `${rating}.0`

  return rating
}

export { formattedRating }
