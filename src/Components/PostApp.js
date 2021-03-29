import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PostForm from './PostForm'
import PostsLists from './PostsList'


export default function PostApp() {
  const [posts,setPosts] = useState([])
 
  return (
    <Router>
      <div className="container-fluid text-center">
        <header className="p-2">
          <h1>Posts</h1>
          <PostForm />
        </header>
        <section className="mt-2">
          <PostsLists posts={posts} />
        </section>
      </div>
    </Router>
  )

}