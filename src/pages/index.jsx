import Header from "../components/layout/Header";
import Field from "../components/field/Field";
import ControlPanel from "../components/controls/ControlPanel";
import { useGameState } from "../hooks/useGameState";

export default function Home() {
  const { isRotated, toggleRotation } = useGameState();

  return (
    <div className="text-white h-screen select-none">
      <Header />
      <Field />
      <ControlPanel isRotated={isRotated} onToggleRotation={toggleRotation} />
    </div>
  );
}
