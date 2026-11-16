
import './App.css';

function Greeting(){
  return(    
      <p>Hello my name is Zach</p>
  )
}

function Goodbye(){
  return(
    <p>Goodbye Everyone!</p>
  )
}

function App(){
  return(
    <>
      <Greeting />
      <Goodbye />
    </>
    
  )

}

export default App;
