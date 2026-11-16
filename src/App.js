
import './App.css';
//make sure to import review..look at Rating.js and Review.js for the other components

function Greeting(props){
 //we can also just pass normal parameters into our functions..we don't have to just use the event keyword
 function greetClick(greeting){
  alert(`${greeting}, ${props.name}`)
 }

 return(
  <div>
    <button onClick={() => greetClick("Hello")}>
      Say Hello
    </button>
    <button onClick={() => greetClick("Hey")}>
      Say Hey
    </button>
  </div>
 )
}


function App(){
  //if passing numerical data surround it in the brackets
  return(

    <Greeting name="Zach" />
    
  )

}

export default App;
