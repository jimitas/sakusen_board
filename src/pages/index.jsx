// import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const ITEM = ["サッカー", "バレーボール", "ラグビー", "バスケットボール"];
  const NUM = [3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <body className="text-white bg-yellow-900 h-screen">
        <header className="p-3 flex justify-center">
          <div className="text-5xl">地味に助かる　作戦ボード　</div>

          <select className="mx-3 select">
            {ITEM.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <select className="mx-3 px-3 select">
            {NUM.map((num) => {
              return (
                <option key={num} value={num}>
                  {num}人
                </option>
              );
            })}
          </select>
          <div className="text-3xl mx-3 px-3 pt-1 bg-gray-600 border rounded-md">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </header>
        <main></main>
      </body>
    </>
  );
}
