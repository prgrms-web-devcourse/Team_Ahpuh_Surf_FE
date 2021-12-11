import { useRouter } from 'next/router'

const MonthPosts = () => {
  const router = useRouter()
  const { month } = router.query

  return <div>{month}</div>
}

export default MonthPosts
