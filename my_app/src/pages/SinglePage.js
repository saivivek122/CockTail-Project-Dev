import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./singlepage.css"
import Loading from '../components/Loading';

const SinglePage = () => {
    const[data,setData]=useState()
    // const[loading,setLoading]=useState(true)
    const {id}=useParams();
    console.log(id)
   const fetchingData=async()=>{
    try{
        // setLoading(true)
        const response =await axios.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        setData(response.data.drinks)
        // setLoading(false)
        // window.scrollTo(0,0)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
   }
    useEffect(()=>{
      window.scrollTo(0,0)
        fetchingData()
    },[id])
  return (
    <div className='main-container'>
    <div className='single-page'>
      {data ?(data.map((details)=>{
        return(
            <div className='image-container'>
                <img src={details.strDrinkThumb} alt="" className='one-image' />
                <div className='details'>
           <h3>{details.strDrink}</h3>
           <p>{details.strAlcoholic}</p>
           <p>{details.strCategory}</p>
           <p>{details.strGlass}</p>
           <ul>
            {details.strIngredient1 &&<li>{details.strIngredient1}</li>}
            {details.strIngredient2 &&<li>{details.strIngredient2}</li>}
            {details.strIngredient3 &&<li>{details.strIngredient3}</li>}
            
           </ul>
           </div>
          <Link to={`${details.idDrink}`}>
          <button>Add To Cart</button>
          </Link>
           </div>
        )
      })):<Loading/>}
    </div>
    </div>
  )
}

export default SinglePage
