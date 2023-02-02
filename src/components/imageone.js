import { Parallax } from 'react-parallax';
import One from '../images/one.jpg';

const imageone = () => (
    <Parallax className="img" blur={5} bgImage={One} bgImageAlt="the cat" strength={200}>
      <div className='content'>
      <span className='img-text'> coding </span>
      </div>
    </Parallax>
);
export default imageone;