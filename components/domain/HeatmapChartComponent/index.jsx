import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { getMonth } from './getMonth'

const HeatmapChartComponent = ({ data, height }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  // name: 월, x: 일, y: 작성 갯수
  const dataset = []
  months.map((month) =>
    dataset.push({
      name: month,
      data: [],
    }),
  )
  data?.forEach(({ date, count }) => {
    const m = getMonth(date)
    dataset
      .filter((month) => month.name === m)
      .map((res) =>
        res.data.push({
          x: new Date(date).getDate(),
          y: count,
        }),
      )
  })

  const options = {
    chart: {
      type: 'heatmap',
      width: '100%',
      height,
      background: '#ffffff',
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    legend: {
      position: 'bottom',
      show: false,
    },
    noData: {
      text: 'Do Data',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#807c7e',
        fontSize: '16px',
      },
    },
    responsive: [
      {
        breakpoint: 376,
        options: {
          chart: {
            width: 340,
            height: 210,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '10px',
              },
            },
          },
        },
      },
      {
        breakpoint: 414,
        options: {
          chart: {
            width: 370,
            height: 250,
          },
        },
      },
    ],
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: '#FCFCFC',
              name: 'Lv.0(0)',
            },
            {
              from: 1,
              to: 1,
              color: '#e7f7ff',
              name: 'Lv.1(1~3)',
            },
            {
              from: 2,
              to: 2,
              color: '#d0ebff',
              name: 'Lv.2(4~6)',
            },
            {
              from: 3,
              to: 4,
              color: '#a5d8ff',
              name: 'Lv.3(5~8)',
            },

            {
              from: 5,
              to: 5,
              color: '#4dabf7',
              name: 'Lv.4(8~10)',
            },
          ],
        },
      },
    },
  }
  if (!dataset) {
    return <div />
  }
  return (
    <ReactApexChart
      options={options}
      series={dataset}
      type="heatmap"
      style={{ marginBottom: 10, marginTop: 20, zIndex: 1 }}
    />
  )
}
HeatmapChartComponent.propTypes = {
  height: PropTypes.string,
}
HeatmapChartComponent.defaultProps = {
  height: '350px',
}
export default HeatmapChartComponent
