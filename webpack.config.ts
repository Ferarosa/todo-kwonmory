import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@typings': path.resolve(__dirname, 'src/typings'),
		},
	},
	entry: {
		app: './src/client',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					env: {
						development: {
							plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
						},
						production: {
							plugins: ['@emotion'],
						},
					},
				},
				exclude: path.join(__dirname, 'node_modules'),
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
		new CleanWebpackPlugin(),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/',
	},
};

if (isDevelopment && config.plugins) {
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
	config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
}

export default config;
