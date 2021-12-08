import { useCallback, useRef, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { AiTwotoneSetting } from 'react-icons/all'
import * as Style from './style'
import { getDefaultOptions } from './getDefaultOptions'

const AreaChartComponent = ({ width, height, data, isMyPage }) => {
  const chartRef = useRef(null)
  const [options, setOptions] = useState(
    getDefaultOptions(data, height, isMyPage),
  )

  // TODO: 외부에서 데이터 받을 때 props로 받고, 받을 때 아예 정제되서 받도록 처리
  // eslint-disable-next-line new-cap
  const dayObj = new dayjs()
  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()

  const firstDayOfMonth = dayjs(`${thisYear}-${thisMonth + 1}-01`)
  const lastDayOfMonth = dayjs(`${thisYear}-${thisMonth + 1}-30`)

  const areaChartArgs = {
    ref: chartRef,
    options,
    series: data,
    type: 'area',
  }

  const handleData = useCallback((timeline) => {
    setOptions({
      selection: timeline,
    })

    switch (timeline) {
      case 'one_month':
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: {
            min: new Date(firstDayOfMonth).getTime(),
            max: new Date(lastDayOfMonth).getTime(),
            labels: {
              formatter(val) {
                return dayjs(val).format('M/DD')
              },
            },
          },
        })
        break
      case 'one_year':
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: {
            min: new Date(data[0].data[0].x).getTime(),
            max: new Date(data[0].data[data[0].data.length - 1].x).getTime(),
            labels: {
              formatter(val) {
                return dayjs(val).format('M')
              },
            },
          },
        })
        break

      default:
    }
  }, [])
  const handleSettingButton = () => {
    console.log('has to move to Category Manage Page ')
  }
  return (
    <div style={{ ...Style.containerStyle, width }}>
      <div style={{ display: 'inlineBlock', backgroundColor: 'white' }}>
        <AiTwotoneSetting
          style={{
            ...Style.settingButtonStyle,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          onClick={handleSettingButton}
          size={20}
        />
      </div>
      <AreaChart {...areaChartArgs} style={{ width: '100%' }} />
      {isMyPage ? (
        <div />
      ) : (
        <Style.ButtonContainer>
          <Style.Button onClick={() => handleData('one_year')}>
            year
          </Style.Button>
          <Style.Button onClick={() => handleData('one_month')}>
            month
          </Style.Button>
        </Style.ButtonContainer>
      )}
    </div>
  )
}
AreaChart.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.array.isRequired,
}
AreaChart.defaultProps = {
  width: '100%',
  height: 250,
}
export default AreaChartComponent
