
import './App.css';
//make sure to import review..look at Rating.js and Review.js for the other components
import Review from './Review.js';

function App(){
  //if passing numerical data surround it in the brackets
  return(
    <>
      <Review username="Zach" rating={5} text="Vison Quest was a great show in the MCU" />
      <Review username="Tim" rating={1} text="Batman v Superman...why make this movie" />
    </>
    
  )

}

export default App;
