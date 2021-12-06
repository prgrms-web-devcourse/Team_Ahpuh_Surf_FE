import { useCallback, useRef, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { AiTwotoneSetting } from 'react-icons/all'
import * as Style from './style'

const AreaChartComponent = ({ width, height, data }) => {
  const chartRef = useRef(null)

  const [options, setOptions] = useState({
    // TODO: 적정 블루계열 컬러 회의해서 정하기
    colors: ['#80d6ff', '#0d47a1', '#0077c2', '#0077c2', '#002171'],

    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
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
    width,
    height,
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
                return dayjs(val).format('MMM d')
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
    <div style={{ ...Style.containerStyle, width: width || 500 }}>
      <AiTwotoneSetting
        style={Style.settingButtonStyle}
        onClick={handleSettingButton}
      />
      <AreaChart {...areaChartArgs} />
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
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array.isRequired,
}
AreaChart.defaultProps = {
  width: 500,
  height: 250,
}
export default AreaChartComponent
