import Draggable from "react-draggable";
import { useState } from "react";
export default function Home() {
  const NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ARROW_PINK = [1, 1, 2, 2, 3, 3, 4, 4];
  const ARROW_BLUE = [5, 5, 6, 6, 7, 7, 8, 8];
  const SAKUSEN = [
    "チームの作戦名は？",
    "ガンガン行こうぜ！",
    "バッチリがんばれ！",
    "わたしにまかせて！",
    "守りを大事に！",
    "つないで行こう",
    "声をかけあって行こう",
    "指示を守って行こう",
    "マークして行こう",
    "落ち着いて行こう",
    "はげましあって行こう",
    "あきらめないで行こう！",
    "作戦A",
    "作戦B",
    "作戦C",
  ];
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <body style={{ backgroundColor: "#000" }} className="text-white h-screen select-none">
        <header style={{ height: "10vh", borderBottom: "1px white solid" }} className="p-3 flex justify-center">
          <div className="h1">地味に助かる　作戦ボード</div>
          <div>
            <select className="select mx-3 -mt-1">
              {SAKUSEN.map((item) => {
                return (
                  <option key={SAKUSEN} className="cursor-pointer" value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="ml-2 h2">
            スクリーンショットをとって、
            <br />
            ロイロノートなどに残すこともできるよ。
          </div>
        </header>

        <main className="main">
          <section className="couat mx-auto mt-5">
            <div className="absolute left_goal"></div>
            <div className="absolute left_line"></div>
            <div className="absolute mid_line"></div>
            <div className="absolute right_line"></div>
            <div className="absolute right_goal"></div>
          </section>
        </main>

        <fotter className="flex p-2">
          <section className="flex flex-wrap mx-auto">
            {NUM.map((num) => {
              return (
                <Draggable defaultPosition={{ x: 0, y: 0 }}>
                  <div key={NUM} className="red cursor-pointer" value={num}>
                    <div className={isShow === true ? "rotate-90" : null}>{num}</div>
                  </div>
                </Draggable>
              );
            })}
          </section>

          <section className="place flex flex-wrap">
            {ARROW_PINK.map((item) => {
              return (
                <Draggable defaultPosition={{ x: 0, y: 0 }}>
                  <img key={ARROW_PINK} className="arrow" src={`./arrow_${item}.png`} alt="" />
                </Draggable>
              );
            })}
          </section>

          <section>
            <div>
              <Draggable defaultPosition={{ x: 0, y: 0 }}>
                <img className="ball" src="./ball.png" alt="" />
              </Draggable>
            </div>
            <button
              className="btn"
              onClick={() => {
                setIsShow((isShow) => {
                  return !isShow;
                });
              }}
            >
              {isShow ? "戻す" : "回転"}
            </button>
          </section>

          <section className="place flex flex-wrap">
            {ARROW_BLUE.map((item) => {
              return (
                <Draggable defaultPosition={{ x: 0, y: 0 }}>
                  <img key={ARROW_BLUE} className="arrow" src={`./arrow_${item}.png`} alt="" />
                </Draggable>
              );
            })}
          </section>

          <section className="flex flex-wrap mx-auto">
            {NUM.map((num) => {
              return (
                <Draggable defaultPosition={{ x: 0, y: 0 }} className="">
                  <div key={num} className="blue cursor-pointer" value={num}>
                    <div className={isShow === true ? "-rotate-90" : null}>{num}</div>
                  </div>
                </Draggable>
              );
            })}
          </section>
        </fotter>
      </body>
    </>
  );
}
