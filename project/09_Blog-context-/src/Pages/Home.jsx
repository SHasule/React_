import React from 'react'
import Paginatition from '../components/Paginatition'
import Header from '../components/Header'
import Blog from '../components/Blog'
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Blog></Blog>
        <Paginatition />
      </div>
      
    </div>
  )
}

export default Home
