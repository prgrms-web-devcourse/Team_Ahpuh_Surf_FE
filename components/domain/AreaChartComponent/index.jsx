import { useCallback, useRef, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const AreaChartComponent = ({ width, height, data }) => {
  const chartRef = useRef(null)
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    width: ${(props) => (props.width === undefined ? '500px' : `${width}px`)};
  `
  const Button = styled.button`
    color: #222;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    border-bottom: 2px solid #ddd;
    border-radius: 2px;
    padding: 4px 17px;
    margin-left: 3px;
    margin-right: 3px;
  `
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
      enabled: false, // 지점별 점수 확인 가능, true로 변환시 에러 발생..
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
          return dayjs(val).format('MMM/d')
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
    // series: [data],
    selection: 'one_year',
  })

  // TODO: 외부에서 데이터 받을 때 type 달라질 테니 대응할 수 있게 개선 필요 -> props로 받을 때 아예 정제되서 받도록 처리
  const [series, setSeries] = useState(data)
  // console.log(series)
  const dayObj = new dayjs()
  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // 1월 = 0, 2월 = 1

  const firstDayOfMonth = dayjs(`${thisYear}-${thisMonth + 1}-01`)
  const lastDayOfMonth = dayjs(`${thisYear}-${thisMonth + 1}-30`)

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

  return (
    <div>
      <AreaChart
        ref={chartRef}
        options={options}
        series={series}
        type="area"
        width={width}
        height={height}
      />
      <ButtonContainer>
        <Button onClick={() => handleData('one_year')}>year</Button>
        <Button onClick={() => handleData('one_month')}>month</Button>
      </ButtonContainer>
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
