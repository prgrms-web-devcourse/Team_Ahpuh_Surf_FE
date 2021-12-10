import Image from 'next/image'
import dynamic from 'next/dynamic'
import {sampleData } from 'utils/SampleData/RadialChartComponent'
import {heatmapSampleData} from 'utils/SampleData/heatmapChart'
import {CategoryScore} from 'utils/SampleData/CategoryScore'
import * as Style from './style'
import { Text } from 'components/base'
import { DashboardCard } from '../../components/domain'

const Dashboard=()=>{

  const averageBoxStyle={
    display:'flex',
    position:'relative',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10
  }
  const avgScores=CategoryScore.map(data=>data.averageScore)
    .reduce((avg,value,_,{length})=>avg+value/length,0)

  const RadialChart=dynamic(import('components/domain/RadialBarChartComponent'),{
    ssr:false
  })
  const HeatmapChart=dynamic(import('components/domain/HeatmapChartComponent'),{
    ssr:false
  })


  return (
    <Style.Container>
      <Style.HorizontalBox>
        <Style.Box width='70%' style={{padding:10}}>
          <div>You Made</div>
          <div><span style={{padding:10,fontSize:60}}>{CategoryScore.length}</span>surfs</div>
        </Style.Box>
        <Style.Box width='30%'>
          <Image src='https://picsum.photos/200' layout='responsive' width='100%' height='100%' alt='image'/>
        </Style.Box>
      </Style.HorizontalBox>
      <Style.Box width='100%' style={averageBoxStyle}>
        <div>
          <div style={{position:'relative',left:10,fontSize:30}}>your</div>
          <div style={{fontSize:40}}>average</div>
          <div style={{position:'relative',left:40,fontSize:30}}>score</div>
        </div>
        <div style={{fontSize:70}}>{Math.floor(avgScores)}</div>
      </Style.Box>
      <RadialChart data={sampleData}  style={{marginBottom:20}}/>
      <Text size={40} strong block style={{marginTop:20,alignSelf:'start'}}>Surfing STAT</Text>
      <HeatmapChart data={heatmapSampleData} width="100%" height="160%" style={{marginBottom:20}}/>
      {CategoryScore.map(({categoryId,name,postCount,averageScore})=>(
        <DashboardCard key={categoryId} categoryName={name} score={averageScore} recordAmount={postCount}/>))}
    </Style.Container>
  )
}
export default Dashboard