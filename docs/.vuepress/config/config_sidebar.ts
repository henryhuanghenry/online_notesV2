import * as fs from 'fs';
import * as path from 'path';
import type { SidebarConfig } from '@vuepress/theme-default';

// interface SidebarItem {
//   text: string;
//   collapsible?: boolean;
//   sidebarDepth?: number;
//   children?: string[];
// }

// interface Sidebar {
//   [key: string]: SidebarItem[];
// }

// function generateSidebarItem(folderPath: string): SidebarItem[] {
//   const sidebar_items: SidebarItem[] = 
//   fs.readdirSync(path.resolve(__dirname, folderPath)).filter(f => f !== 'pic').map(
//     f => ({ text: path.join(folderPath, f)}));
//     //f => ({ text: path.join(folderPath, f), collapsible: true, sidebarDepth: 1}));

//   return sidebar_items;
// }

function generateSidebarItem(pathPrefix: string, docsFolderPath: string): string[] {
  const sidebar_children: string[] = 
  fs.readdirSync(path.resolve(__dirname, pathPrefix + docsFolderPath)).filter(f => f !== 'pic' 
  && f.includes('.md') && !f.includes('.DS')).map(f => docsFolderPath + f).sort();
  //.map(f => (path.join(f)));
  // f => (path.join(docsFolderPath, f)));
  //f => ({ text: path.join(folderPath, f), collapsible: true, sidebarDepth: 1}));

  return sidebar_children;
}

const sidebar: SidebarConfig = {
  '/CSclass/CSclass_DB/': [
    {
      text: '数据库笔记',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/CSclass/CSclass_DB/'),
    },
  ],
  '/CSclass/CSclass_RL_introRL/': [
    {
      text: 'introRL笔记',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/CSclass/CSclass_RL_introRL/'),
    },
  ],
  '/CSclass/CSclass_RL_LeeRL/': [
    {
      text: 'LeeRL笔记',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/CSclass/CSclass_RL_LeeRL/'),
    },
  ],
  '/CSclass/CSclass_RL_DRL_CS285/': [
    {
      text: 'CS285笔记',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/CSclass/CSclass_RL_DRL_CS285/'),
    },
  ],
  '/Algorithm/': [
    {
      text: '算法学习笔记',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/Algorithm/'),
    },
  ],
  '/AI/Basic/': [
    {
      text: 'AI基础',
      collapsible: false,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/AI/Basic/'),
    },
  ],
  '/AI/NLP/': [
    {
      text: 'NLP',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/AI/NLP/'),
    },
  ],
  '/AI/RecSys/': [
    {
      text: '推荐系统',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/AI/RecSys/'),
    },
  ],
  // '/AI/': [
  //   {
  //     text: 'AI基础',
  //     collapsible: true,
  //     //sidebarDepth: 1,
  //     children: generateSidebarItem('../../.', '/AI/基础/'),
  //   },
  //   {
  //     text: 'NLP',
  //     collapsible: true,
  //     //sidebarDepth: 1,
  //     children: generateSidebarItem('../../.', '/AI/NLP/'),
  //   },
  //   {
  //     text: '推荐系统',
  //     collapsible: true,
  //     //sidebarDepth: 1,
  //     children: generateSidebarItem('../../.', '/AI/推荐系统/'),
  //   },
  // ],
  '/Programming/python/': [
    {
      text: 'python基础',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/Programming/python/'),
    },
  ],
  '/Programming/cpp/': [
    {
      text: 'c++侯捷课程',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/Programming/cpp/'),
    },
  ],
  '/Programming/others/': [
    {
      text: '杂项',
      collapsible: true,
      //sidebarDepth: 1,
      children: generateSidebarItem('../../.', '/Programming/others/'),
    },
  ],
};

export default sidebar;
