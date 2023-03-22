import pink from "../assets/pink.JPG";
import blue from "../assets/blue.JPG";
import './Header.css';
import Slider from './Slider';

const Header = () => {
  return (
  <div className='header-container'>
    <Slider />
    <div className="header-container-trending">
      <img src={pink} alt="pink image" />
      <img src={blue} alt="blue image" />
    </div>
  </div>
  )
}

export default Header