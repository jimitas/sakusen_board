import Player from "../pieces/Player";
import Arrow from "../pieces/Arrow";
import Ball from "../pieces/Ball";
import { GAME_CONFIG, PLAYER_TYPES } from "../../constants/gameConstants";

const ControlPanel = ({ isRotated, onToggleRotation }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "2vw auto 2vw auto" }} className="flex p-2">
      {/* Red Players */}
      <section className="place">
        {GAME_CONFIG.PLAYER_NUMBERS.map((num) => (
          <Player
            key={`red-player-${num}`}
            number={num}
            type={PLAYER_TYPES.RED}
            isRotated={isRotated}
          />
        ))}
      </section>

      {/* Pink Arrows */}
      <section className="place">
        {GAME_CONFIG.ARROW_PINK_TYPES.map((item, index) => (
          <Arrow
            key={`pink-arrow-${index}`}
            type={item}
            index={index}
          />
        ))}
      </section>

      {/* Ball and Control Button */}
      <section style={{ width: `min(10vw,100px)` }}>
        <Ball />
        <button
          className="btn"
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "600",
            cursor: "pointer"
          }}
          onClick={onToggleRotation}
        >
          回転
        </button>
      </section>

      {/* Blue Arrows */}
      <section className="place">
        {GAME_CONFIG.ARROW_BLUE_TYPES.map((item, index) => (
          <Arrow
            key={`blue-arrow-${index}`}
            type={item}
            index={index}
          />
        ))}
      </section>

      {/* Blue Players */}
      <section className="place">
        {GAME_CONFIG.PLAYER_NUMBERS.map((num) => (
          <Player
            key={`blue-player-${num}`}
            number={num}
            type={PLAYER_TYPES.BLUE}
            isRotated={isRotated}
          />
        ))}
      </section>
    </div>
  );
};

export default ControlPanel;