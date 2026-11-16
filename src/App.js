
import './App.css';


//we are going to create a component made up of other components (component composition)
//we are going to make a movie review component that will be made up of its own internal reviews and a star rating
//the star rating will be a separate component we use and we will use that in the Review component

function Rating(props){
  return(
    <div>
      {props.stars} / 5 stars
    </div>
  )
}

function Review(props){
  return(
    <div>
      <h2>
        Review by {props.username}
      </h2>
      <p>
        <Rating stars={props.rating} />
      </p>
      <p>
        {props.text}
      </p>
    </div>
  )
}

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
