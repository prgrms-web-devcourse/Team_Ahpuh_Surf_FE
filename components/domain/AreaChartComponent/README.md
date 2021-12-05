## NOTICE
* apexchart는 window 객체를 활용하기 때문에 Next.js를 사용하면 바로 활용할 수 없어서 다른 방식으로 호출해야 합니다

```jsx
import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('components/domain/AreaChartComponent'), {
  ssr: false,
})
```
- `dynamic()`에 `콜백함수`형태로 컴포넌트 불러오고, ssr을 `false`로 비활성화한 다음에 작동시켜야 합니다
- (storybook에서는 별도로 작업 안해도 사용 가능(ssr이 아니기 때문에 window객체 사용 가능해서임))