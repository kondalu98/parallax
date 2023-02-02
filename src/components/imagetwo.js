import { Parallax } from 'react-parallax';
import Two from '../images/two.jpg';

const imagetwo = () => (
    <Parallax className="img" blur={2} bgImage={Two} bgImageAlt="the cat" strength={200}>
      <div className='content'>
      <span className='img-text'> coding </span>
      </div>
    </Parallax>
);
export default imagetwo;