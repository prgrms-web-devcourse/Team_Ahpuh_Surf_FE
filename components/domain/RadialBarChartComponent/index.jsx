/* eslint-disable */

import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { getFilteredData } from './getFilteredData'

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
      height: 400,
      type: 'radialBar',
      background: '#ffffff',
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
    // colors: ['#a5d8ff', '#4dabf7', '#228be6', '#1971c2'],
    colors: ['#82b0fb', '#6378ca', '#6d5ba7', '#6378CA'],
    labels,
    legend: {
      show: true,
      floating: false,
      fontSize: '18px',
      offsetX: 0,
      offsetY: 30,

      position: 'bottom',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter(seriesName, opts) {
        return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]} %`
      },
      itemMargin: {
        vertical: 3,
      },
    },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={height}
    />
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
