import Draggable from "react-draggable";
import { PLAYER_TYPES } from "../../constants/gameConstants";

const Player = ({ number, type, isRotated }) => {

  const getRotationStyle = () => {
    if (!isRotated) {
      return { transform: "rotate(0deg)" };
    }
    return {
      transform: type === PLAYER_TYPES.RED ? "rotate(90deg)" : "rotate(-90deg)"
    };
  };

  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div
        className={`${type} cursor-pointer`}
        value={number}
        style={getRotationStyle()}
      >
        <div>{number}</div>
      </div>
    </Draggable>
  );
};

export default Player;