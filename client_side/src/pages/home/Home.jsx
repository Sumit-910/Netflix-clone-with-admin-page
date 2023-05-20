import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss';

import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState([]);

  useEffect(()=>{
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers: {
              token: "Bearer "
            }
          }
        );
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getRandomLists();
  },[type, genre])
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list)=>(
          <List list={list} />
        ))}
      </div>
    </>
  )
}

export default Home