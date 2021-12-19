import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { getCurrentQuarter } from './getCurrentQuarter'

export const getDefaultOptions = (height, isMyPage) => {
  const year = new Date().getFullYear()
  const quarter = getCurrentQuarter()
  let options = {
    legend: {
      show: false,
    },
    chart: {
      id: 'area-datetime',
      type: 'area',
      height,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
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
      min: new Date(`${year}-${(quarter - 1) * 3 + 1}-01`),
      max: new Date(`${year}-${quarter * 3}-30`),
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
      width: 0.5,
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
    selection: `${getCurrentQuarter()}`,
  }
  if (isMyPage) {
    options = { ...options, legend: { show: false } }
  }
  return options
}
getDefaultOptions.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isMyPage: PropTypes.bool,
}
getDefaultOptions.defaultProps = {
  isMyPage: true,
}
