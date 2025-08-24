function getRandomColor() {
  // 生成0到255之间的随机整数
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // 将RGB值组合成颜色字符串
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

// 使用函数获取随机颜色
const randomColor = getRandomColor();

const rootEl = document.querySelector(':root');
// rootEl.style.setProperty('--vp-c-indigo-1', randomColor)