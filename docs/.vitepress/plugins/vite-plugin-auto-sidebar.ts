import fg from 'fast-glob';
import chalk from 'chalk';
import path from 'node:path';
import fs from 'node:fs';
import matter from 'gray-matter';

interface ConfigInterface {
  dir?: string; // 文件夹路径，默认为当前工作目录下的docs文件夹
  includesDirList?: string[]; // 需要包含的文件夹列表，不传包含所有文件夹
  ignoreDirList?: string[]; // 忽略的文件夹列表，不传忽略默认列表
  navTextMap?: Record<string, string>; // 导航文本映射，用于自定义导航文本
}

interface SidebarItemInterface {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItemInterface[];
}

const defaultIgnoreList = ['node_modules', 'dist', '.vitepress'];
const workRoot = process.cwd();

function generateSidebar(config) {
  const { dir, includesDirList, ignoreDirList, navTextMap } = config;
  const sideBar = {};

  let patterns = [];
  if (Array.isArray(includesDirList) && includesDirList.length > 0) {
    for (let path of includesDirList) {
      patterns.push(`${path}/**/*.md`);
    }
  }

  // 忽略文件夹列表
  const ignore = ignoreDirList.map((item) => `${item}/**/*.md`);

  const paths = fg.sync(patterns, {
    cwd: dir,
    deep: 5,
    dot: false,
    ignore
  });

  paths.forEach((fullPath) => {
    let hasIndexMd = false;
    const segments = fullPath.split('/');
    if (segments[segments.length - 1] === 'index.md') {
      hasIndexMd = true;
      segments.pop();
    }
    // 完整路径
    const absolutePath = path.resolve(workRoot, dir, fullPath);
    //console.log(absolutePath);

    // 一级文件不需要构建侧边栏
    if (segments.length <= 1) {
      return;
    }
    const topPath = `/${segments[0]}/`;
    if (!sideBar[topPath]) {
      sideBar[topPath] = [];
    }
    let current = sideBar[topPath];
    let currentPath = '';
    segments.forEach((seg, index) => {
      const isLast = segments.length - 1 === index;
      currentPath += `/${seg}`;
      let isMd = false;
      if (/.md$/i.test(seg)) {
        isMd = true;
        seg = seg.replace('.md', '');
      }
      const segText = navTextMap[seg] || seg;
      let currentConfig = current.find((item) => item.text === segText);
      if (currentConfig) {
        current = currentConfig.items;
      } else {
        const { title } = getMdInfo(absolutePath);

        const sidebarItem: SidebarItemInterface = {
          text: isMd ? title : segText,
          collapsed: false,
          link: isLast ? currentPath : undefined,
          items: []
        };
        // 存在index.md 且是最后一个文件夹 路径最后要加路径分隔符/，否则菜单选中不能高亮
        if (hasIndexMd && isLast) {
          sidebarItem.link = currentPath + '/';
          sidebarItem.text = title || segText;
        }

        current.splice(current.length, 0, sidebarItem);
        current = current[current.length - 1].items;
      }
    });
  });

  return sideBar;
}

// 读取markdown文件的标题
function getMdInfo(path) {
  let title = '';
  const data = fs.readFileSync(path, 'utf-8');
  const matterData = matter(data);
  const reg = /#[\s](.+)\s/;
  const matches = data.match(reg);
  if (matches) {
    title = matches[1];
  }
  return {
    title,
    sort: matterData.data.sort || 9999
  };
}

export default function VitePluginAutoSidebar(optConfig: ConfigInterface) {
  const {
    dir = 'docs',
    includesDirList = [],
    ignoreDirList = [],
    navTextMap = {}
  } = optConfig;
  return {
    name: 'VitePluginAutoSidebar',
    async config(config) {
      const options = {
        dir,
        includesDirList,
        ignoreDirList: [...ignoreDirList, ...defaultIgnoreList],
        navTextMap
      };

      const sideBar = await generateSidebar(options);

      // 如果某个分类下只有一个子元素，并且该子元素下的items下的每个元素items为空，则把它的items提到父目录
      // 这里是为了如果某个一级目录下都是md文件，那么以该一级目录作为目录名
      Object.keys(sideBar).forEach((key) => {
        const item = sideBar[key];
        if (item && item.length === 1) {
          if (item[0].items.some((el) => el.items.length > 0)) {
            const children = item[0].items;
            sideBar[key] = [...children];
          }
        }
      });
      console.log(sideBar, 'sideBar');

      // 与现有配置合并
      config.vitepress.site.themeConfig.sidebar = {
        ...config.vitepress.site.themeConfig.sidebar,
        ...sideBar
      };
      console.log(chalk.blue('[sidebar]'), chalk.green('生成侧边栏数据成功'));
      return config;
    }
  };
}
