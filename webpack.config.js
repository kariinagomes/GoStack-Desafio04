const path = require('path');

/**
 * O babel que cuidará dos arquivos js, mas para os outros tipos de arquivo 
 * (exemp: css, imagem, etc) utilizaremos outros loaders dentro das regras;
 */
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  // Module é uma nova configuração e dentro dela teremos regras;
  module: {
    rules: [
      {
        // Na propriedade test, é necessário passar uma expressão regular.
        test: /\.js$/, // busca um arquivo que termine ($) com .js
        exclude: /node_modules/, // já está transpilado
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // "pega" o css e transfere p/ arquivo html
          { loader: 'css-loader'}, // p/ entender a importação de outros arquivos dentro do css
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};