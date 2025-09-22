import { STRATEGY_OPTIONS } from "../../constants/gameConstants";

const Header = () => {
  return (
    <header
      style={{ height: "10vh", borderBottom: "1px white solid", display: "flex" }}
      className="p-3 flex justify-center"
    >
      <div style={{ fontSize: "2vw", margin: "1vw" }} className="ml-2">
        地味に助かる　作戦ボード
      </div>
      <div>
        <select style={{ fontSize: "2vw", margin: "1vw" }} className="select mx-3 -mt-1">
          {STRATEGY_OPTIONS.map((item, index) => (
            <option key={`strategy-${index}`} className="cursor-pointer" value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div style={{ fontSize: "1vw", margin: "1vw" }} className="ml-2">
        スクリーンショットをとって、
        <br />
        ロイロノートなどに残すこともできるよ。
      </div>
    </header>
  );
};

export default Header;