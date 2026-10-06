const blocksData = [
  { width: 50, height: 40 },
  { width: 100, height: 80 },
  { width: 140, height: 120 },
  { width: 130, height: 180 },
  { width: 170, height: 220 }
];
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
blocksData.forEach((block) => {
  const div = document.createElement('div');
  div.classList.add('block');
  div.style.width = block.width + 'px';
  div.style.height = block.height + 'px';
  root.appendChild(div);
});