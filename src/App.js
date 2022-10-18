import React from 'react'
import './assets/styles/main.scss'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Product from './components/Product'

export default function App() {
  return (
    <div className='App'>
        <Header/>
        <Dashboard/>
        <Product/>
    </div>
  )
}
