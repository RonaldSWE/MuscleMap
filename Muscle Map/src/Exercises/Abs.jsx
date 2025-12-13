import Lottie from "lottie-react";
import JumpingJacksAnime from "/src/Animations/Jumping Jack.json";
import AbdominalCrunchesAnime from "/src/Animations/Abdominal Crunches.json";
import RussianTwistAnime from "/src/Animations/Russian Twists.json";

const Abs = () => {
  return (
    <>
      <h1 className="header">Abs Beginner</h1>

      {/* The exercise cards */}
      <div className="exercise-card">
        <Lottie
          animationData={JumpingJacksAnime}
          loop={true}
          style={{ width: 140, height: 140 }}
          className="animation"
        />
        <h2>Jumping Jacks</h2>
        <p>00:20</p>
      </div>

      <div className="exercise-card">
        <Lottie
          animationData={AbdominalCrunchesAnime}
          loop={true}
          style={{ width: 140, height: 140 }}
          className="animation"
        />
        <h2>Abdominal Crunches</h2>
        <p>x16</p>
      </div>

      <div className="exercise-card">
        <Lottie
          animationData={RussianTwistAnime}
          loop={true}
          style={{ width: 140, height: 140 }}
          className="animation"
        />
        <h2>Abdominal Crunches</h2>
        <p>x20</p>
      </div>
    </>
  );
}

export default Abs;
