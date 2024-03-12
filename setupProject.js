const fs = require('fs');
const path = require('path');

const dirs = [
    'src/api',
    'src/config',
    'src/controllers',
    'src/middleware',
    'src/models',
    'src/routes',
    'src/services',
    'src/utils',
    'tests',
];

const files = [
    'src/app.js',
    'src/api/index.js',
    'src/config/index.js',
    'src/controllers/index.js',
    'src/middleware/index.js',
    'src/models/index.js',
    'src/routes/index.js',
    'src/services/index.js',
    'src/utils/index.js',
    'tests/index.test.js',
];

dirs.forEach((dir) => {
    fs.mkdirSync(path.resolve(dir), { recursive: true });
    console.log(`Directory created: ${dir}`);
});

files.forEach((file) => {
    fs.writeFileSync(path.resolve(file), '// TODO: Implement', { flag: 'w' });
    console.log(`File created: ${file}`);
});

console.log('Express.js project structure has been set up successfully.');
