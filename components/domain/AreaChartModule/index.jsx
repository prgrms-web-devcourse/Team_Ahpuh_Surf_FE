import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as Style from 'styles/pageStyles/mypageStyle'
import { useGetCategories } from '../../../utils/apis/category'
import { useGetPostAll, useGetYearScore } from '../../../utils/apis/post'
import { MainDropdown, Text } from '../../base'

const AreaChartModule = ({ userId, isMyPage }) => {
  const AreaChartComponent = dynamic(
    import('components/domain/AreaChartComponent'),
    { ssr: false },
  )

  const { data: categories } = useGetCategories({ revalidateOnFocus: false })
  const { data: surfData } = useGetYearScore(userId, {
    revalidateOnFocus: false,
  })
  const { data: allPosts } = useGetPostAll(userId, 0, {
    revalidateOnFocus: false,
  })

  const [dataset, setDataset] = useState([])
  const [selectedSurf, setSurf] = useState({ categoryId: null, name: 'All' })
  const [catList, setCatList] = useState([])

  useEffect(() => {
    if (surfData && surfData.length !== 0) {
      const allData = surfData?.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      setDataset(allData)
    }
  }, [surfData, allPosts])
  useEffect(() => {
    if (categories && categories.length !== 0) {
      setCatList([
        {
          categoryId: null,
          name: 'All',
        },
        ...categories,
      ])
    }
  }, [categories])
  useEffect(() => {
    console.log(selectedSurf)
  }, [selectedSurf])
  const handleClick = (item) => {
    setSurf(item)
    if (!item.categoryId) {
      const allData = surfData.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      setDataset(allData)
    } else {
      const result = surfData.filter(
        (surf) => surf.categoryId === item.categoryId,
      )
      setDataset([
        {
          data: result[0].postScores,
          name: result[0].categoryName,
        },
      ])
    }
  }

  if (!categories || !surfData || !allPosts) {
    return <div />
  }
  return (
    <div>
      <MainDropdown
        height={30}
        fontSize={15}
        width={100}
        selected={selectedSurf}
        handleClick={handleClick}
        data={catList}
        isObj
        border
        style={{ marginTop: 10 }}
      />
      <div style={{ position: 'relative', top: 15 }}>
        <Style.AreaChartSkeleton>
          <Text size={30} color="darkGray">
            Loading
          </Text>
        </Style.AreaChartSkeleton>
        <AreaChartComponent
          data={dataset}
          isMyPage={isMyPage}
          style={{ marginTop: 10 }}
        />
      </div>
    </div>
  )
}

AreaChartModule.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default AreaChartModule
