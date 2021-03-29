import React,{useState} from 'react'

const SinglePost = ({task}) =>{
  const [favourite,setFavourite] = useState(false)
  // console.log(props,"task")
  return(

  <li>
    <div >
      <input type = "checkbox" className= "toggle"  />
      <label  className = "post-item">
      
      </label>
    </div>
  </li>
  )
}

const PostsList = props =>
  <ul className="task-list">
    {props.posts.map(todo => <SinglePost  />)}
  </ul>

export default PostsList