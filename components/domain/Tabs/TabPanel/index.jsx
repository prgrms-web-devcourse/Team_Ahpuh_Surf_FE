import styled from '@emotion/styled'

const TabPanelWrapper = styled.ul`
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

const TabPanel = ({ activeLabelSet, fontSize }) => {
  const { label, query: queryKey } = activeLabelSet

  // cookie에서 userId 가져오기
  // const {data: followList} = useSWR(`/follow?${queryKey}=${userId}`, fetcher)

  return (
    <TabPanelWrapper fontSize={fontSize}>
      {/* followList.map(list => <li></li>) */}
      {label} {queryKey}
    </TabPanelWrapper>
  )
}

export default TabPanel
