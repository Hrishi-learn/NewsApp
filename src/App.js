import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import News from "./components/News";
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
require('dotenv').config()

function App() {

  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('india')
  const [articles,setArticles] = useState([]);

  const apiKey = process.env.API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`

  const handleChange = (e)=>{
    setSearch(e.target.value);
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }
  

  useEffect(()=>{
    axios.get(url).then(response=>{
      setArticles(response.data.articles);
      console.log(response.data.articles);
    }).catch(err=>{
      console.log(err);
    })
  },[query]);


  return (
    <div className="App">
        <Navbar />
        <div className='search'>
          <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input'
            type='text'
            placeholder='Search for news'
            value={search}
            onChange={handleChange}
            onSubmit={handleSubmit}
            ></input>
            <button type='submit' className='btn btn-warning search-button'><SearchIcon/></button>
          </form>
        </div>
        <News  news={articles}/>
    </div>
  );
}

export default App;
