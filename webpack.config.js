const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [

			{
				test: /\.jsx?$/,
				include: /src/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}

		]
	}, // module

  plugins: [
		
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: false
		})
	
	]

};
