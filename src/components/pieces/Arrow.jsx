import Draggable from "react-draggable";

const Arrow = ({ type, index }) => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <img
        className="arrow"
        src={`./arrow_${type}.png`}
        alt={`Arrow ${type}`}
      />
    </Draggable>
  );
};

export default Arrow;