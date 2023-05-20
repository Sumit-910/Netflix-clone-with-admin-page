import {Link, useLocation} from 'react-router-dom';
import './watch.scss';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <>
      <div className="watch">
        <Link to='/' >
        <div className="back">
          <i className="fas fa-arrow-left"></i>
        </div>
        </Link>
        <video className='video' autoplay progress controls src={movie.video} />
      </div>
    </>
  )
}

export default Watch
