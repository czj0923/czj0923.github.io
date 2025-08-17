import fs from 'node:fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';

export interface Data {
  blogsList: ListInterface[];
}

declare const data: Data;
export { data };

interface ListInterface {
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  url: string;
  sticky: boolean;
  content: string;
}

// 获取博客文章列表
function getBlogsList(pathList) {
  const list: ListInterface[] = [];
  const workRoot = process.cwd();
  pathList
    .filter((path) => path !== 'index.md')
    .forEach((path) => {
      const absolutePath = `${workRoot}/docs/blogs/${path}`;

      const fileContent = fs.readFileSync(absolutePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const { title, date, categories, tags, sticky } = data;
      path = path.replace(/\.md$/, '').replace(/index$/, '')

      list.push({
        title,
        date,
        categories,
        tags,
        url: `/blogs/${path}`,
        content,
        sticky: sticky || false
      });
    });

  // 按日期排序
  list.sort((a, b) => {
    return dayjs(b.date) - dayjs(a.date);
  });

  const stickyList = list.filter((item) => item.sticky);
  const otherList = list.filter((item) => !item.sticky);

  return [...stickyList, ...otherList];
}

export default {
  // 文件改动时触发热更新
  watch: ['docs/blogs/**/*.md','!docs/blogs/index.md'],
  load(watchedFiles) {
    const pathList = watchedFiles.map((item) => {
      return item.replace('docs/blogs/', '');
    });
    const blogsList = getBlogsList(pathList);
    return {
      blogsList: blogsList
    };
  }
};
