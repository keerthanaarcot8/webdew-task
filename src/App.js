import logo from './logo.svg';
import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';
import slider1 from './assets/images/slider1.jpg'
import slider2 from './assets/images/slider2.jpg'
import slider3 from './assets/images/slider3.jpg'
import TwoColumnSection from './components/TwoColumnSection/TwoColumnSection';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
 // Define an array of slides
 const slides = [
  {
    imageUrl: slider1,
    altText: 'Slide 1',
  },
  {
    imageUrl: slider2,
    altText: 'Slide 2',
  },
  {
    imageUrl: slider3,
    altText: 'Slide 3',
  },
  // {
  //   imageSrc: slider1,
  //   title: 'Slide 1 Title',
  //   description: 'Slide 1 Description'
  // },
  // {
  //   imageSrc: slider2,
  //   title: 'Slide 2 Title',
  //   description: 'Slide 2 Description'
  // },
  // {
  //   imageSrc: slider3,
  //   title: 'Slide 3 Title',
  //   description: 'Slide 3 Description'
  // },
  // Add more slides as needed
];

return (
  <div>
    <Header/>
    {/* Render the HeroSlider component with the slides as props */}
    <HeroSlider slides={slides} />
    <TwoColumnSection/>
    <Footer/>
    {/* Add other components or content as needed */}
  </div>
);
}

export default App;
