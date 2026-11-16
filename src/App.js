
import './App.css';


//we can take in a number of properties using the props keyword
//props allow us to use the jsx in the return statement to determine what the property will be called
//props are nice because they allow us to use any number of arguments to render out the component
function Greeting(props){
  return(    
      <p>Hello my name is {props.name} and my age is {props.age}</p>
      
  )
}

//you can also use exact prop names if you dont want to just use props and define the in the function body
function Goodbye({name}){
  return(
    <p>Goodbye, {name}</p>
  )
}


function App(){
  //if passing numerical data surround it in the brackets
  return(
    <>
    
      <Greeting name="Tim" age={8}  />
      <Goodbye name={"James"} />
      
    </>
    
  )

}

export default App;
