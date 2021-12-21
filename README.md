<img src="https://capsule-render.vercel.app/api?type=waving&color=0:5b8dd2,50:81b4ef,100:81b4cf&height=300&section=header&text=Surf.&fontColor=fff&fontSize=70&fontAlignY=40&desc=my%20own%20growth%20curve%20service&descAlignY=60" width="100%"/>

<div style="display: flex; align-items: center"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

<br>
<br>

# _**Surf.**_

## 🏄‍♂️&nbsp;&nbsp;내 인생 성장곡선 사이트&nbsp;&nbsp;_**Surf.**_

<!-- 가운데에 멍멍이 로고 넣고 밑에 프로젝트 소개 -->
<p align="center">
	<img width="250px" alt="surf_logo" src="https://user-images.githubusercontent.com/59479363/146974909-41e439c3-f8d6-465f-95fb-57d528258670.png">
</p>
<br>
<p align="center">
인생은 surfing 을 타는 것처럼 즐겁지만,
	</p>
<p align="center">
suffering 또한 피할 수 없다.
	</p>
<p align="center">
피할 수 없다면 기록하고 공유하자! Surf 를 통해 🌊🏄‍♀️🏄🏄🏻‍♂️
	</p>

### **✏️ 기획 배경 및 동기**

열심히 달려온 나 자신! 열심히는 하고 있는데 내가 얼마나 발전했는지 기록하는 공간은 없을까? <br>
그냥 일기는 메모장에라도 적을 수 있고, 블로그는 이미 무수히 존재하고, 색다른 방법으로 동기부여 받고 기록하고 공유하는 그런 공간이 필요해! 🙆‍♀️

- 성장곡선으로 한눈에 내 인생을 돌아보기
- 남들의 성장곡선을 보며 동기부여도 받기
- 곡선의 특정 구간마다 기록도 남기기
- 곡선이 아닌 기록들만 모아서 보기
- 필요하다면 포트폴리오로도 사용 가능하기


<br>
<br>

## 👥&nbsp;&nbsp;TEAM 착한 **김**, 나쁜 **김**, 이상한 **김**

<table style="max-width: 900px; width: 100%; margin: 0 auto;">
	<tr>
	  <td><img src="https://user-images.githubusercontent.com/59479363/146962132-a50a64af-d7ce-4800-95e3-be507c19be31.png" width="300px" /></td>
	  <td><img src="https://user-images.githubusercontent.com/59479363/146964394-f96d1991-ecfe-4689-b273-99c6342c19cb.png" width="300px" /></td>
    <td><img src="https://user-images.githubusercontent.com/59479363/146962857-ed87b556-968b-4747-88c5-ce1608ad1ab0.png" width="300px" /></td>
	</tr>
  <tr>
    <th><a href="https://github.com/kimyeim">김예임 😇</a></th>
	  <th><a href="https://github.com/rlacksals96">김찬민 😈</a></th>
    <th><a href="https://github.com/Jeong-jeong">김지영 😜</a></th>
	</tr>
</table>

<br>
<br>

## 🎉&nbsp;&nbsp;실행 스크립트

```shell
> yarn install

> yarn build
> yarn dev
```

<br>
<br>

## 💻&nbsp;&nbsp;기술 스택

### 📚&nbsp;&nbsp;Frameworkes & Libraries

- 리액트 프레임워크: Next.js@12.0.4
- 상태(데이터) 관리 : swr@1.1.0

<br>

### 🔧&nbsp;&nbsp;Tools

- 모듈 번들링 : Webpack@5.64.4
- 트랜스파일러 : Babel@7.16.0
- 의존성 관리 및 스크립팅 : yarn@1.22.17

<br>
<br>

## 📂&nbsp;&nbsp;디렉토리 구조

```
.
├── README.md
├── __mocks__
│   └── next
├── components
│   ├── base					- base 컴포넌트
│   │   ├── Avatar
│   │   ├── Badge
│   │   ├── Dropdown
│   │   ├── Input
│   │   ├── Loading
│   │   ├── Logo
│   │   ├── MainDropdown
│   │   ├── Modal
│   │   ├── Text
│   │   ├── Textarea
│   │   ├── Toggle
│   │   ├── Upload
│   │   └── index.js
│   ├── common            		- common 컴포넌트
│   │   ├── Header
│   │   ├── Navbar
│   │   └── index.js
│   └── domain					- domain 컴포넌트
│       ├── AddSurfModal
│       ├── AreaChartComponent
│       ├── AreaChartModule
│       ├── Calendar
│       ├── CalendarCard
│       ├── Carot
│       ├── CategoryCard
│       ├── ContentBox
│       ├── DashboardCard
│       ├── DatePicker
│       ├── EditAboutMe
│       ├── FollowCard
│       ├── FollowModal
│       ├── HeatmapChartComponent
│       ├── InputItem
│       ├── NoticeCard
│       ├── Post
│       ├── PostDetail
│       ├── Profile
│       ├── RadialBarChartComponent
│       ├── ScoreSlider
│       ├── SkeletonBox
│       ├── Tabs
│       ├── UpdateCategoryModal
│       ├── Welcome
│       └── index.js
├── constants             		- 상수 데이터
│   ├── apiPath.js
│   ├── environment.js
│   └── inputLength.js
├── hooks						- 커스텀 훅
│   ├── index.js
│   ├── useForm.js
│   ├── useHover.js
│   └── useToggle.js
├── jsconfig.json
├── netlify.toml
├── next.config.js
├── package.json
├── pages
│   ├── 404
│   │   └── index.jsx
│   ├── _app.jsx
│   ├── _document.jsx
│   ├── categorymanage
│   │   └── index.jsx
│   ├── dashboard
│   │   └── index.jsx
│   ├── explore
│   │   └── index.jsx
│   ├── index.jsx
│   ├── login
│   │   └── index.jsx
│   ├── mypage
│   │   ├── [userId]
│   │   ├── alarm
│   │   ├── edit
│   │   └── index.jsx
│   ├── posts
│   │   ├── [year]
│   │   └── new
│   └── signup
│       └── index.jsx
├── public
├── stories               		- 컴포넌트 유닛 테스트
│   ├── base
│   ├── common
│   ├── domain
│   └── hooks
├── styles
│   ├── globals.css
│   ├── pageStyles				- 페이지 별 스타일
│   └── theme.js
├── utils
│   ├── apis
│   ├── common            		- 자주 쓰는 함수 모음
│   └── validation              - 유효성 검사 함수 모음
├── .env		- 환경 변수 
└── yarn.lock
```
