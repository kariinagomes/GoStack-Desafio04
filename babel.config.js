/**
 * babel/preset-env: alterar as funcionalidades do javascript que o
 *         navegador ainda não entende, por exemp, o import e export;
 * babel/preset-react: transformar as coisas que o navegador não 
 *          entende do react, por exemp, o jsx;
 */ 

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};