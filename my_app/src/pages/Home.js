import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import "./home.css";
import SearchContent from './SearchContent';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

const Home = () => {
  const [data, setData] = useState();
  const [userSubmittedInput, setUserSubmittedInput] = useState('');
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleUserInput = (value) => {
    console.log(userSubmittedInput)
    setUserSubmittedInput(value);
  }

  const fetchData = async () => {
   setTimeout(async()=>{
      
   
    setLoading(true)
    try {
      const response = userSubmittedInput === '' 
        ? await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`) 
        : await axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${userSubmittedInput}`);
      
      setData(response.data.drinks);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  },1000)
  }

  useEffect(() => {
    fetchData();
    // Scroll to the top every time the location changes
    window.scrollTo(0, 0);
  }, [location,userSubmittedInput]);

  return (
    <div>
      <SearchContent handleUserInput={handleUserInput} />
      <div className='menu-grid'>
        {loading ?(<Loading/>):data ? (data.map((details) => {
          return (
            <div className='menu-container' key={details.idDrink}>
              <img src={details.strDrinkThumb} alt="" className='image' />
              <h3>{details.strDrink}</h3>
              <p className='heading'>{details.strAlcoholic}</p>
              <Link to={`single/${details.idDrink}`}>
                <button>Details</button>
              </Link>
            </div>
          );
        })) :<p className="no-results">No results found</p>}
      </div>
      { !loading && <Footer />}
    </div>
  );
}

export default Home;
