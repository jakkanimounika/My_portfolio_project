var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry:[
    './src/app/app.js'
   ],
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: path.join(__dirname,'src')
      },

    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },

    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },

//font-awesome
       {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },

        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        },

        {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: "file-loader?name=/public/icons/[name].[ext]"
}
]
}
};
