import theme from 'styles/theme'
// import { images  } from 'public/images/sample.jpeg'

export const Explores = [
  {
    user: {
      userId: 1,
      profileUrl: '',
      username: 'test1',
      follow: true,
      like: true,
    },
    post: {
      categoryName: 'react 💕',
      colorCode: theme.surfColor.$blue__1,
      postId: 1,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
      score: 89,
      selectedDate: '2021-01-01',
      createdAt: '2021-11-01',
    },
  },
  {
    user: {
      userId: 2,
      profileUrl: '',
      username: 'test2',
      follow: false,
      like: false,
    },
    post: {
      categoryName: 'vue 🥶',
      colorCode: theme.surfColor.$blue__2,
      postId: 2,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
      score: 89,
      selectedDate: '2021-11-02',
      createdAt: '2021-11-02',
    },
  },
  {
    user: {
      userId: 3,
      profileUrl: '',
      username: 'test3',
      follow: true,
      like: true,
    },
    post: {
      categoryName: 'angular',
      colorCode: theme.surfColor.$blue__3,
      postId: 3,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
      score: 70,
      selectedDate: '2021-11-03',
      createdAt: '2021-11-03',
    },
  },
  {
    user: {
      userId: 3,
      profileUrl: '',
      username: 'test4',
      follow: false,
      like: false,
    },
    post: {
      categoryName: 'spring boot 🏋️‍♀️',
      colorCode: theme.surfColor.$blue__4,
      postId: 4,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
      score: 79,
      selectedDate: '2021-11-04',
      createdAt: '2021-11-04',
    },
  },
  {
    user: {
      userId: 5,
      profileUrl: '',
      username: 'test5',
      follow: true,
      like: true,
    },
    post: {
      categoryName: 'mysql',
      colorCode: theme.surfColor.$blue__5,
      postId: 5,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
      score: 95,
      selectedDate: '2021-11-05',
      createdAt: '2021-11-05',
    },
  },
]
