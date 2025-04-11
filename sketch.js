let flowerImg, leafImg;
let elements = [];

function preload() {
  flowerImg = loadImage("assets/flower.png");
  leafImg = loadImage("assets/leaf.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // 所有添加的图案元素
  for (let el of elements) {
    image(el.img, el.x, el.y, el.size, el.size);
  }

  // 工具区底部
  fill(230);
  rect(0, height - 80, width, 80);

  image(flowerImg, width / 2 - 80, height - 40, 60, 60);
  image(leafImg, width / 2 + 80, height - 40, 60, 60);

  fill(0);
  textSize(14);
  text("点击添加图案 / 按 S 键下载", width / 2, height - 10);
}

function mousePressed() {
  // 检测点击的是哪个图标
  if (mouseY > height - 80) {
    if (dist(mouseX, mouseY, width / 2 - 80, height - 40) < 30) {
      elements.push({ img: flowerImg, x: width / 2, y: height / 2, size: 100 });
    } else if (dist(mouseX, mouseY, width / 2 + 80, height - 40) < 30) {
      elements.push({ img: leafImg, x: width / 2, y: height / 2, size: 100 });
    }
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("my_pattern", "png");
  }
}
