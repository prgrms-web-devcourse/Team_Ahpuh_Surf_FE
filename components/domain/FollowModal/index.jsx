import { useGetFollowersList, useGetFollowingList } from 'utils/apis/follow'
import Tabs from '../Tabs'

const FollowModal = ({ userId, toggleTabs, setToggleTabs }) => {
  const { data: flwrs } = useGetFollowersList(userId)
  const { data: fowings } = useGetFollowingList(userId)
  const labelSet = [
    {
      label: 'followers',
      payload: flwrs,
    },
    {
      label: 'followings',
      payload: fowings,
    },
  ]
  if (!flwrs || !fowings || !userId || !labelSet) {
    return <p />
  }
  return (
    <Tabs
      labelSet={labelSet}
      toggleTabs={toggleTabs}
      setToggleTabs={setToggleTabs}
    />
  )
}
export default FollowModal
