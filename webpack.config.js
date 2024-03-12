const path = require('path');

module.exports = {
    target: 'node', // Đảm bảo Webpack biết rằng bạn đang build cho Node.js
    entry: './src/app.js', // Điểm bắt đầu của ứng dụng
    output: {
        path: path.resolve(__dirname, 'dist'), // Thư mục output
        filename: 'bundle.js', // Tên file output
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Sử dụng babel-loader cho tất cả các file .js
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    // Thêm cấu hình khác ở đây nếu cần
};
