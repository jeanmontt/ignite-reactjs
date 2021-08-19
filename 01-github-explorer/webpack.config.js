const path = require('path'); //Webpack é rodado dentro do node, portanto as importações devem ser utilizando "require"
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Importando o HTML Webpack Plugin

const isDevelopment = process.env.NODE_ENV !== 'production' //Verificando se a variável ambiente está em ambiente de desenvolvimento ou produção para que o Webpack trabalhe de acordo com o ambiente específico

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //informando o modo de trabalho do webpack, podendo ser ele development ou production
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Configurando o Source Map, existem alguns modos de configurações, sendo o eval-source-map utilizada para desenvolvimento e source-map para produção
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //informa qual o arquivo inicial da aplicação. Utilizando o "path" para manter o padrão entre sistemas operacionais distintos.
  //com o "path" é utilizado a "," no lugar da "/" para informar o diretório, "__dirname" busca o diretório onde está este arquivo de instrução.
  output: { //informa qual arquivo será gerado pelo webpack
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: { //por padrão webpack lê arquivos .js, então é informado que tanto .js como .jsx devem ser lidos pela aplicação
    extensions: ['.js', '.jsx'],
  },
  devServer: { //Configurando o Webpack Dev Server
    contentBase: path.resolve(__dirname, 'public') //informa onde está o arquivo html da aplicação
  },
  plugins: [ //configurando o HTML Webpack Plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') //Qual arquivo de template que a ferramenta vai utilizar para gerar o HTML
    })
  ],
  module: { //onde fica as configurações de como a aplicação irá se comportar quando estiver importando cada um dos tipos de arquivos 
    rules: [ //Array de regras
      { //É criado um objeto para cada tipo de arquivo
        test: /\.jsx$/, //utilizado uma expressão regular para verificar se o arquivo é .jsx
        exclude: /node_modules/, //exclui todos arquivos que estão dentro da pasta node_modules, pois por padrão os arquivos desta pasta já são arquivos prontos para leitura do browser e não deve ser modificado. Cada biblioteca deve se preocupar com seu próprio processo de build do aquivo para que o browser entenda.
        use: 'babel-loader' //utiliza o Babel Loader para fazer a converção do arquivo.
      },
      {
        test: /\.scss$/, //utilizado uma expressão regular para verificar se o arquivo é .css
        exclude: /node_modules/, //exclui todos arquivos que estão dentro da pasta node_modules, pois por padrão os arquivos desta pasta já são arquivos prontos para leitura do browser e não deve ser modificado. Cada biblioteca deve se preocupar com seu próprio processo de build do aquivo para que o browser entenda.
        use: ['style-loader', 'css-loader', 'sass-loader'] //utiliza o Style Loader, CSS Loader e SASS Loader para fazer a conversão do arquivo .scss
      }
    ],
  }
};