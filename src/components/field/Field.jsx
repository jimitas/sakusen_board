import FieldLines from "./FieldLines";
import { COLORS } from "../../constants/gameConstants";

const Field = () => {
  return (
    <main className="main">
      <section
        style={{
          margin: "2vw auto 2vw auto"
        }}
        className="couat mx-auto mt-5"
      >
        <FieldLines />
      </section>
    </main>
  );
};

export default Field;