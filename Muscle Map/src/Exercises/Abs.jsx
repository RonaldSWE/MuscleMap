import Lottie from "lottie-react"

function Abs(props) {
  return (
    <>
      <div className="exercise-card">
        <Lottie animationDetails={props.detail} loop={true} autoplay={true} />
        <h2>{props.exerciseName}</h2>
        <p>{props.duration}</p>
      </div>
    </>
  );
}

export default Abs;
