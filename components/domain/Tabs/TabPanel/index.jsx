import styled from '@emotion/styled'
import FollowCard from '../../FollowCard'

const TabPanelWrapper = styled.ul`
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

const TabPanel = ({ activeLabelSet, fontSize }) => {
  const { payload } = activeLabelSet
  return (
    <TabPanelWrapper fontSize={fontSize}>
      {payload.map(({ userId, userName, profilePhotoUrl }) => (
        <FollowCard
          key={userId}
          userId={userId}
          profilePhotoUrl={profilePhotoUrl}
          userName={userName}
        />
      ))}
    </TabPanelWrapper>
  )
}

export default TabPanel
