import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dataList from './data/data'
import Header from './Components/Header'
import './styles/App.css'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)
  const [productList,setProductList]=useState(()=>
  {
    const savedList=localStorage.getItem("myProducts")
    return savedList? JSON.parse(savedList):dataList
  })
  function handleAdd(newProduct)
  {
    const newList=[...productList,newProduct]
    setProductList(newList)
    localStorage.setItem("myProducts",JSON.stringify(newList))
  }
  return (
    <>
      <Header/>
      <Main productList={productList} onAdd={handleAdd}/>
    </>
  )
}

export default App
