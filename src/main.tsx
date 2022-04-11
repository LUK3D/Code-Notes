import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import Snipets from './routes/snipets';
import CodeBoard from './routes/codeboard';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
   <Routes>
     <Route path='/' element={ <App />}></Route>
     <Route path='/snipets' element={ <Snipets />}></Route>
     <Route path='/codeboard' element={ <CodeBoard />}></Route>
   </Routes>
  </BrowserRouter>,
  rootElement
)
