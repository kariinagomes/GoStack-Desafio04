import React from 'react';
import { render } from 'react-dom'; //integração do react com o browser

import App from './app/App';

/**
 * O render é responsável por renderizar um componente do 
 * react dentro de algum conteúdo no html 
 */ 
render(<App />, document.getElementById('app'));