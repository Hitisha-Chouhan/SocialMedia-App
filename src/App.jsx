import { useState } from 'react'
import './App.css'
import Header from './comp/Header';
import { IoMdPersonAdd } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './comp/Footer';
import Sidebar from './comp/Sidebar';
import CreatePost from './comp/CreatePost';
import { Outlet } from 'react-router-dom';
import PostList from './comp/PostList';
import PostListProvider from './store/post-list-store';
function App() {

let [sidebarTab , setSidebarTab]=useState("Home")

  return (

    <PostListProvider>
  <div className='app-container'>
          <Sidebar></Sidebar>
    <div className='content'>
             <Header></Header>
<Outlet></Outlet>        
            
          <Footer></Footer>

    </div>
  </div>
    </PostListProvider>
  
  )
}

export default App
