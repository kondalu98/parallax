import { Parallax } from 'react-parallax';
import Three from '../images/three.jpg';

const imagethree = () => (
    <Parallax className="img"bgImage={Three} bgImageAlt="the cat" strength={200}>
      <div className='content'>
      <span className='img-text'> coding </span>
      </div>
    </Parallax>
);
export default imagethree;