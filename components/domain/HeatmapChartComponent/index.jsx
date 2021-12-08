import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { getMonth } from './getMonth'

const HeatmapChartComponent = ({ data, height, width }) => {
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
      height,
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
    // responsive: [
    //   {
    //     breakpoint: 330,
    //     options: {
    //       chart: {
    //         width: 320,
    //         height: 200,
    //       },
    //       yaxis: {
    //         labels: {
    //           style: {
    //             fontSize: '10px',
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
    plotOptions: {
      heatmap: {
        colorScale: {
          // 작성 갯수를 0~10으로 잡았는데, 추후 작성 갯수에 따라 조정
          ranges: [
            {
              from: 0,
              to: 0,
              color: '#FCFCFC',
              name: 'Lv.0(0)',
            },
            {
              from: 1,
              to: 3,
              color: '#e7f7ff',
              name: 'Lv.1(1~3)',
            },
            {
              from: 4,
              to: 6,
              color: '#d0ebff',
              name: 'Lv.2(4~6)',
            },
            {
              from: 5,
              to: 8,
              color: '#a5d8ff',
              name: 'Lv.3(5~8)',
            },

            {
              from: 8,
              to: 10,
              color: '#4dabf7',
              name: 'Lv.4(8~10)',
            },
          ],
        },
      },
    },
  }
  return (
    <div>
      <ReactApexChart
        options={options}
        series={dataset}
        type="heatmap"
        height={height}
        width={width}
      />
    </div>
  )
}
HeatmapChartComponent.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  width: PropTypes.string,
}
HeatmapChartComponent.defaultProps = {
  height: 350,
  width: '100%',
}
export default HeatmapChartComponent
