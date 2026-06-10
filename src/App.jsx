import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dataList from '../data'
import Header from './Components/Header'
import './App.css'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)
  const [productList,setProductList]=useState(dataList)
  return (
    <>
      <Header/>
      <Main productList={productList}/>
    </>
  )
}

export default App
