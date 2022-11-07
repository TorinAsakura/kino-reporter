import { DateTime } from 'luxon'

const formattedDate = (variant = 'onlyYear', date: Date): string => {
  const onlyYear = {
    year: 'numeric',
  } as const

  if (variant === 'onlyYear') return new Intl.DateTimeFormat('ru-RU', onlyYear).format(date)
  if (variant === 'fullDate')
    return DateTime.fromJSDate(date).setLocale('ru').toFormat('d LLLL yyyy')

  return new Intl.DateTimeFormat('en-US', onlyYear).format(date)
}

export { formattedDate }
