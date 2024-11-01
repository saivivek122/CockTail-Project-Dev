import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import "./newssettler.css"
import Loading from '../components/Loading';


const NewsSettler = () => {
  const[data,setData]=useState();
  

 
  useEffect(()=>{
  const fetchingData=async()=>{
    try{
      const response=await axios.get("https://thecocktaildb.com/api/json/v1/1/random.php")
      setData(response.data.drinks);
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
   
  }
  fetchingData()
  },[])
  return (


    <div className='main-container'>
      
     <h4>Recipe Of the day</h4>
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
            <li>{details.strIngredient1}</li>
            <li>{details.strIngredient2}</li>
            <li>{details.strIngredient3}</li>
           </ul>
           </div>
           </div>
        )
      })):<Loading/>}
    </div>
    </div>
   
   
   

  )
}

export default NewsSettler
