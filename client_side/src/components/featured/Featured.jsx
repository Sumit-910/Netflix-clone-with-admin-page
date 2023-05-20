import { useEffect, useState } from 'react';
import axios from 'axios';
import './featured.scss';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomMovie = async () => {
      try{
        const res = await axios.get(`/movies/random?type=${type}`,{
          headers: {
            token: "Bearer "
          }
        });
        setContent(res.data[0]);
      }catch (err) {
        console.error(err);
      }
    }
    getRandomMovie();
  },[type])
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="aventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horor">Horor</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
          <img src={content.imgTitle} alt="" />
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <button className="play">
              <i className="fas fa-play"></i>
              <span>Play</span>
            </button>
            <button className="more">
              <i className="fas fa-circle-info"></i>
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured