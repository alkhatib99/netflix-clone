import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js'
import NavBar from './Components/Navbar/NavBar.js'
import {Routes,Route} from 'react-router-dom';
import FavList from './Components/FavList/FavList'
import {useEffect,useState} from 'react';
function App() {
  const [favoriteList,SetFavList] = useState([]);


  const fetchData = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_SERVER}/favMovie`);
  
      const data = await res.json();
      SetFavList(data);
  
    }catch (error) {
      console.log("error", error);
    }
  
  }
  
  
    useEffect(() => {
      fetchData();
    } , []);
  
  return (
  <>
  <NavBar  />
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/favList" element={<FavList favoriteList={favoriteList} />} />

  </Routes>


  </>

  );
}

export default App;
