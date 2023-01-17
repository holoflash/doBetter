import { resolve } from 'path';

export const entry = './src/scripts/index.js';
export const output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
};
export const module = {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
};