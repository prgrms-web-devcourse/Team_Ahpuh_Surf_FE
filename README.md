<img src="https://capsule-render.vercel.app/api?type=waving&color=0:5b8db2,100:81b4cf&height=300&section=header&text=Surf.&fontColor=fff&fontSize=70&fontAlignY=40&desc=my%20own%20growth%20curve%20service&descAlignY=60" width="100%"/>

<div style="display: flex; align-items: center"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

<tr>

## TEAM 착한 김, 나쁜 김, 이상한 김
<table style="">
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
  
## STRUCTURE
```
├── README.md                 - 리드미 파일
│
├── app/                      - 어플리케이션 폴더
│   ├── __init__.py           - 서버 파이썬 모듈 초기화
│   ├── models.py             - 서버 모델 정의
│   │── views.py              - 서버 뷰 함수(API 엔드포인트) 정의
│   │ 
│   ├── src/                  - 클라이언트 사이드 폴더
│   │   ├── actions.js        - 액션 정의
│   │   ├── components/       - 리액트 컴포넌트
│   │   ├── containers/       - 리액트 컨테이너
│   │   ├── main.js           - 메인 자바스크립트 (webpack 엔트리 포인트)
│   │   ├── main.scss         - 메인 스타일시트
│   │   └── reducers.js       - 리듀서 정의
│   │   └── test/             - 클라이언트 테스트 파일 폴더
│   │ 
│   ├── static/               - 스태틱 폴더 (빌드 결과물)
│   │   ├── _bundle.js        - webpack을 통해 빌드된 서빙용 자바스크립트
│   │   └── fonts/            - 부트스트랩이 사용하는 폰트들
│   │ 
│   └── templates/            - 템플릿 폴더
│       └── main.html         - React container를 포함하는 메인 템플릿
│ 
├── config.py                 - flask 앱 설정 파일
├── dramatic.db               - SQLite3 데이터베이스
├── package.json              - npm 설정
├── requirements.txt          - pip 디펜던시 리스트
├── run.py                    - 서버 시작 스크립트
├── run_with_dummy.py         - 더미 데이터가 있는 서버 시작 스크립트
├── storeSpec.js              - store 스펙 정의 (사용하지 않는 파일)
└── webpack.config.js         - webpack 설정
```
