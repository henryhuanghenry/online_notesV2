interface NavBarItem {
  text: string;
  link: string;
  activeMatch?: string;
  children?: NavBarItem[];
}

const navbar: NavBarItem[] = [
  {
    text: '算法',
    link: '/Algorithm/README.md',
    activeMatch: '^/Algorithm/',
  },
  {
    text: 'Notes',
    link: '/CSclass/README.md',
    children: [
      {
        text: 'introRL',
        link: '/CSclass/CSclass_RL_introRL/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/CSclass/CSclass_RL_introRL/',
      },
      {
        text: 'LeeRL',
        link: '/CSclass/CSclass_RL_LeeRL/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/CSclass/CSclass_RL_LeeRL/',
      },
      {
        text: 'DRL_CS285',
        link: '/CSclass/CSclass_RL_DRL_CS285/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/CSclass/CSclass_RL_DRL_CS285/',
      },
    ],
  },
  {
    text: 'AI',
    link: '/AI/README.md',
    children: [
      {
        text: '基础',
        link: '/AI/Basic/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/AI/Basic/',
      },
      {
        text: 'NLP',
        link: '/AI/NLP/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/AI/NLP/',
      },
      {
        text: '推荐系统',
        link: '/AI/RecSys/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/AI/RecSys/',
      },
    ],
  },
  {
    text: '编程',
    link: '/Programming/README.md',
    children: [
      {
        text: 'python',
        link: '/Programming/python/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/Programming/python/',
      },
      {
        text: 'c++',
        link: '/Programming/cpp/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/Programming/cpp/',
      },
      {
        text: '杂七杂八',
        link: '/Programming/others/README.md',
        // 该元素将一直处于激活状态
        activeMatch: '^/Programming/others/',
      },
    ],
  },
];

export default navbar;
