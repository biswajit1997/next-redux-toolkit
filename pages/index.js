import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slice/counterSlice'
import {useEffect} from 'react';
import { fetchDataUser } from '../redux/slice/fetchDataSlice';
import Image from 'next/image'
export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const userData = useSelector((state) => state.fetchData.fetchData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataUser())
  }, [])
  
  return (
     <>
     {/* counter */}
      <div>
        <span   onClick={() => dispatch(decrement())}> - </span> {count} <span onClick={() => dispatch(increment())}> + </span>
      </div>
{/* Posts */}

<div className='container'>
  <div className='row'>
    {userData.map((item,index)=>{
      return <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.body}</p>
          <a  className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    })}
  </div>
</div>
     </>
   
  )
}
