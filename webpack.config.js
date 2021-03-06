var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'jquery/dist/jquery.min.js',
    'foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname + '/public/',
    filename: './bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      CitiesPanel: path.resolve(__dirname, 'app/components/CitiesPanel.jsx'),
      CityRow: path.resolve(__dirname, 'app/components/CityRow.jsx'),
      CityElement: path.resolve(__dirname, 'app/components/CityElement.jsx'),
      Footer: path.resolve(__dirname, 'app/components/Footer.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
      ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      routerHistory: path.resolve(__dirname, 'app/modules/history.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.[ot]tf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "./fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "./images/[name].[ext]"
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map'
};
