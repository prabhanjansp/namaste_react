import React,{useEffect,useState} from 'react'

const RestaurentMenu = () => {
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{

    },[])
  return (

    <>
    <div className='menu'>
        <h1>Name of the RestaurentMenu</h1>

        <h2>Menu    </h2>
        <ul>
            <li>Biriyani</li>
            <li>Burgur</li>
            <li>Pasta</li>
        </ul>
    </div>
    </>
  )
}

export default RestaurentMenu