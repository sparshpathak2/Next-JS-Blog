import React from 'react'


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const BlogPost = async ({params}) => {
  
  const data = await getData(params.id)

  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.desc}</h3>
      <p>{data.content}</p>
    </div>
  )
}

export default BlogPost
