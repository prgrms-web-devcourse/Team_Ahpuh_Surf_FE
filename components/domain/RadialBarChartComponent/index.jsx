import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { getFilteredData } from './getFilteredData'

// api: '해당 사용자의 카테고리 정보' 에서 받아오면 된다.
// data: api에서 받아온 데이터 그대로 집어 넣으면 된다 .. getFilteredDate()에서 필요한 데이터만 정제함.
const RadialBarChartComponent = ({ data, height }) => {
  const dataset = getFilteredData(data)
  const series = []
  const labels = []
  dataset.map(({ name, postCount }) => {
    series.push(postCount)
    labels.push(name)
  })

  const options = {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['#a5d8ff', '#4dabf7', '#228be6', '#1971c2'],
    labels,
    legend: {
      show: true,
      floating: true,
      fontSize: '20px',
      offsetX: 0,
      offsetY: 5,

      position: 'bottom',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter(seriesName, opts) {
        return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 0,
            offsetY: 5,
          },
        },
      },
      {
        breakpoint: 650,
        options: {
          legend: {
            position: 'left',
            offsetX: 160,
            offsetY: 15,
          },
        },
      },
    ],
  }

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={height}
      />
    </div>
  )
}

RadialBarChartComponent.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
}
RadialBarChartComponent.defaultProps = {
  height: 350,
}
export default RadialBarChartComponent
