import { useCallback, useEffect, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { AiTwotoneSetting } from 'react-icons/all'
import Carot from 'components/domain/Carot'
import * as Style from './style'
import { getDefaultOptions } from './getDefaultOptions'
import { getCurrentQuarter } from './getCurrentQuarter'
import { updateXAxis } from './updateXAxis'

const AreaChartComponent = ({ width, height, data, isMyPage }) => {
  const [options, setOptions] = useState(getDefaultOptions(height, isMyPage))
  const [curQuarter, setCurQuarter] = useState(getCurrentQuarter())

  const areaChartArgs = {
    options,
    series: data,
    type: 'area',
  }

  const handleData = useCallback((timeline) => {
    setOptions({
      selection: timeline,
    })
    switch (timeline) {
      case 1:
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: updateXAxis('01', '03'),
        })
        break
      case 2:
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: updateXAxis('04', '06'),
        })
        break
      case 3:
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: updateXAxis('07', '09'),
        })
        break
      case 4:
        // eslint-disable-next-line no-undef
        ApexCharts.exec('area-datetime', 'updateOptions', {
          xaxis: updateXAxis('10', '12'),
        })
        break
      default:
    }
  }, [])
  const handleRightCarot = () => {
    if (curQuarter === 4) {
      setCurQuarter(1)
    } else {
      setCurQuarter(() => curQuarter + 1)
    }
  }
  const handleLeftCarot = () => {
    if (curQuarter === 1) {
      setCurQuarter(4)
    } else {
      setCurQuarter(() => curQuarter - 1)
    }
  }
  const carotArgs = {
    width: '100%',
    height: '30px',
    fontSize: 20,
    curQuarter,
    handleLeftCarot,
    handleRightCarot,
  }
  const handleSettingButton = () => {
    console.log('has to move to Category Manage Page ')
  }

  useEffect(() => {
    handleData(curQuarter)
  }, [curQuarter])
  return (
    <div style={{ ...Style.containerStyle, width }}>
      {!isMyPage && (
        <AiTwotoneSetting
          style={Style.settingButtonStyle}
          onClick={handleSettingButton}
          size={20}
        />
      )}

      <AreaChart {...areaChartArgs} style={{ width: '100%' }} />
      <Carot {...carotArgs} />
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
