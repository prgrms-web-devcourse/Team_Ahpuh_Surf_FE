/* eslint-disable */

import { useCallback, useEffect, useState } from 'react'
import AreaChart from 'react-apexcharts'
import PropTypes from 'prop-types'
import { AiTwotoneSetting } from 'react-icons/ai'
import Carot from 'components/domain/Carot'
import * as Style from './style'
import { getDefaultOptions } from './getDefaultOptions'
import { getCurrentQuarter } from './getCurrentQuarter'
import { updateXAxis } from './updateXAxis'
import { useRouter } from 'next/router'

const AreaChartComponent = ({ height, data, isMyPage }) => {
  const [options, setOptions] = useState(getDefaultOptions(height, isMyPage))
  const [curQuarter, setCurQuarter] = useState(getCurrentQuarter())
  const router = useRouter()
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
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    fontSize: 16,
    curQuarter,
    handleLeftCarot,
    handleRightCarot,
  }
  const handleSettingButton = () => {
    router.push('/categorymanage')
  }

  useEffect(() => {
    handleData(curQuarter)
  }, [curQuarter])

  return (
    <Style.ChartContainer>
      {!isMyPage && (
        <AiTwotoneSetting
          style={Style.settingButtonStyle}
          onClick={handleSettingButton}
          size={20}
        />
      )}
      <AreaChart {...areaChartArgs} style={{ width: '100%', flexGrow: 1 }} />
      <Carot {...carotArgs} />
    </Style.ChartContainer>
  )
}

AreaChart.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.array.isRequired,
}
AreaChart.defaultProps = {
  width: '100%',
  height: '100%',
  data: [],
}
export default AreaChartComponent
