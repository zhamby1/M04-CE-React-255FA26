
import './App.css';
//make sure to import review..look at Rating.js and Review.js for the other components

function Greeting(props){
  //lets say we want to pass on some more complicated data from an event
  //for instance we have two buttons and when one of them clicks it says Hello name
  //and when the other clicks it says Hey name
  //we need to pass the id of the button to the function so it knows what event to fire
  //if we need to pass on more data associated with the event (like value or target or ids) we use the event keyword as a function parameter

  function greetClick(event){
    //use a tenary operator
    const greeting = event.target.id === "helloBtn" ? "Hello" : "Hey"
    alert(`${greeting}, ${props.name}`)
  }

  return(
    <div>
      <button id='helloBtn' onClick={greetClick}>Say Hello</button>
      <button id='heyBtn' onClick={greetClick}>Say Hey</button>
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
