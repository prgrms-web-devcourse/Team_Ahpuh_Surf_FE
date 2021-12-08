import dayjs from 'dayjs'
import PropTypes from 'prop-types'

export const getDefaultOptions = (data, height, isMyPage) => {
  // TODO: 적정 블루계열 컬러 회의해서 정하기
  let options = {
    colors: ['#80d6ff', '#0d47a1', '#0077c2', '#0077c2', '#002171'],

    chart: {
      id: 'area-datetime',
      type: 'area',
      // width,
      height,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },

    xaxis: {
      type: 'datetime',
      labels: {
        formatter(val) {
          return dayjs(val).format('M')
        },
      },
      min: new Date(data[0].data[0].x),
      max: new Date(data[0].data[data[0].data.length - 1].x),
    },
    yaxis: {
      show: false,
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
  }
  if (isMyPage) {
    options = { ...options, legend: { show: false } }
    console.log(options)
  }
  return options
}
getDefaultOptions.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isMyPage: PropTypes.bool,
}
getDefaultOptions.defaultProps = {
  isMyPage: true,
}
