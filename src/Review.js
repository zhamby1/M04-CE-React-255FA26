import Rating from "./Rating.js"

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

export default Review