import styled from '@emotion/styled'
// TabPanel은 activedLabelSet의 queryKey통해 useSWR을 요청해 뿌려준다.

const TabPanelWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: yellow;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

const TabPanel = ({ activeLabelSet, fontSize }) => {
  const { label, query: queryKey } = activeLabelSet
  // const queryValue = useSWR로 받아와야 함
  // const {data: followList} = useSWR(`/follow/${queryKey}=${queryValue}`, fetcher)

  return (
    <TabPanelWrapper fontSize={fontSize}>
      {/* followList 돌려돌려 돌림판 */}
      {label} {queryKey}
    </TabPanelWrapper>
  )
}

export default TabPanel
