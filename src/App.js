
import './App.css';
//make sure to import review..look at Rating.js and Review.js for the other components

function Greeting(props){
  //when we have a event function..we can still put those inside of components.  They will just be a separate function inside of the component..this component will have a button that when clicked will say hello props.name
  function helloClick(){
    alert(`Hello, ${props.name}`)
  }
  return(
    <button onClick={helloClick}>
      Say Hello
    </button>
  )
}


function App(){
  //if passing numerical data surround it in the brackets
  return(

    <Greeting name="Zach" />
    
  )

}

export default App;
