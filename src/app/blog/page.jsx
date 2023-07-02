"use client"
import BlogCard from '@/components/blogCard/BlogCard'
import React from 'react'
import styles from './page.module.css'
import { useEffect } from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cashe: 'no-store'
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


const Blog = async () => {

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  const data = await getData()
  // console.log(data)
  return (
    <div className={styles.container}>
      {/* {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <button >Go Somewhere</button>
        </div>
      ))} */}
      {data?.map((item) => (

        <BlogCard key={item._id} blog={item}/>

      ))}
    </div>

  )
}

export default Blog