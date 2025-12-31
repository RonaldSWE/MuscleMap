import { Link } from "react-router-dom";

const Training = () => {
  const bodyParts = [
    {
      name: "Abs",
      path: "/training/abs",
      img: "src/assets/Images/Abs.png",
    },
    {
      name: "Arms",
      path: "/training/arms",
      img: "src/assets/Images/Arms.png",
    },
    {
      name: "Chest",
      path: "/training/chest",
      img: "src/assets/Images/Chest.png",
    },
    {
      name: "Legs",
      path: "/training/legs",
      img: "src/assets/Images/Legs.jpeg",
    },
    {
      name: "Shoulder & Back",
      path: "/training/shoulder-and-back",
      img: "src/assets/Images/Shoulder and back.png",
    },
  ];

  return (
    <>
      <h1 className="header">Training</h1>
      <h2 className="training-subtitle">
        Select a body part to start training
      </h2>

      <div className="body-focus-grid">
        {bodyParts.map((part) => (
          <Link to={part.path} key={part.name} className="body-focus-card">
            <div className="body-focus-image-wrapper">
              <img
                src={part.img}
                alt={part.name}
                className="body-focus-image"
              />
            </div>
            <div className="body-focus-label">{part.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Training;
