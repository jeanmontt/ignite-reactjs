module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { //configurando preset react para que não seja necessário importar o React em todo arquivo que utiliza jsx
      runtime: 'automatic'
    }]
  ]
}