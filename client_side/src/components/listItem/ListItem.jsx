import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './listItem.scss'

const ListItem = ({ index, item }) => {

    const [isHovered, setIsHoveered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const getMovies = async () => {
            try{
                const res = await axios.get(`/movies/find/${item}`,{
                    headers: {
                      token: "Bearer "
                    }
                  });
                  setMovie(res.data);
            }catch (err) {
                console.error(err);
            }
        }
        getMovies();
    },[item])

    return (
        <>
        <Link to={{pathname: "/watch", movie: movie}} >
            <div className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => { setIsHoveered(true) }}
                onMouseLeave={() => { setIsHoveered(false) }}
            >
                <img src={movie.img} alt="item-img" />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <i className="fas fa-play icon"></i>
                                <i className="fas fa-plus icon"></i>
                                <i className="fas fa-thumbs-up icon"></i>
                                <i className="fas fa-thumbs-down icon"></i>
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className='limit' >+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>)}
            </div>
            </Link>
        </>
    )
}

export default ListItem
