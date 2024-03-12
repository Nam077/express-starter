const fs = require('fs');
const path = require('path');

// Đường dẫn đến thư mục public
const publicDir = path.join(__dirname, 'public');

// Đường dẫn đến các thư mục con
const cssDir = path.join(publicDir, 'css');
const jsDir = path.join(publicDir, 'js');
const imagesDir = path.join(publicDir, 'images');

// Tạo thư mục public nếu nó chưa tồn tại
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Tạo thư mục css nếu nó chưa tồn tại
if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir);
}

// Tạo thư mục js nếu nó chưa tồn tại
if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir);
}

// Tạo thư mục images nếu nó chưa tồn tại
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}
