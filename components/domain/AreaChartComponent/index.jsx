import { useCallback, useRef, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { AiTwotoneSetting } from 'react-icons/all'
import * as Style from './style'

// TODO: width: 100% 설정은 되었으나, width가 설정되어 있는 부분중 일부를 제거하면 100%가 깨진다. width 값에 어떠한 값도 넣지 말것
const AreaChartComponent = ({ width, height, data }) => {
  const chartRef = useRef(null)

  const [options, setOptions] = useState({
    // TODO: 적정 블루계열 컬러 회의해서 정하기
    colors: ['#80d6ff', '#0d47a1', '#0077c2', '#0077c2', '#002171'],

    chart: {
      id: 'area-datetime',
      type: 'area',
      // width,
      height,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 1,
      style: 'hollow',
    },

    xaxis: {
      type: 'datetime',
      labels: {
        formatter(val) {
          return dayjs(val).format('MMM')
        },
      },
      min: new Date(data[0].data[0].x),
      max: new Date(data[0].data[data[0].data.length - 1].x),
    },
    tooltip: {
      x: {
        formatter(val) {
          return `${dayjs(val).format('MMM DD')}`
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    selection: 'one_year',
  })

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
                return dayjs(val).format('MMM DD')
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
                return dayjs(val).format('MMM')
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
      <AiTwotoneSetting
        style={Style.settingButtonStyle}
        onClick={handleSettingButton}
      />
      <AreaChart {...areaChartArgs} style={{ width: '100%' }} />
      <Style.ButtonContainer>
        <Style.Button onClick={() => handleData('one_year')}>year</Style.Button>
        <Style.Button onClick={() => handleData('one_month')}>
          month
        </Style.Button>
      </Style.ButtonContainer>
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
