import Draggable from "react-draggable";

const Ball = () => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <img className="ball" src="./ball.png" alt="Ball" />
    </Draggable>
  );
};

export default Ball;