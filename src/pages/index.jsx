import Draggable from "react-draggable";

export default function Home() {
  const NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
  return (
    <>
      <body className="text-white bg-yellow-900 h-screen select-none">
        <header style={{ height: "10vh", borderBottom: "1px white solid" }} className="p-3 flex justify-center">
          <div className="text-3xl">地味に助かる　作戦ボード</div>
          <div>
            <select className="select mx-3 -mt-1">
              {SAKUSEN.map((item) => {
                return (
                  <option key={item} className="cursor-pointer" value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="pt-3">スクリーンショットをとって、ロイロノートで編集すると役立つかも。</div>
        </header>

        <main style={{ height: "70vh" }}>
          <section className="couat mx-auto mt-5">
            <div className="absolute left_goal"></div>
            <div className="absolute left_line"></div>
            <div className="absolute mid_line"></div>
            <div className="absolute right_line"></div>
            <div className="absolute right_goal"></div>
          </section>
        </main>
        <fotter style={{ height: "10vh" }} className="flex">
          <section style={{ width: "260px" }} className="flex flex-wrap mx-auto">
            {NUM.map((num) => {
              return (
                <Draggable defaultPosition={{ x: 0, y: 0 }}>
                  <div key={num} className="red cursor-pointer" value={num}>
                    {num}
                  </div>
                </Draggable>
              );
            })}
          </section>
          <div>
            <Draggable defaultPosition={{ x: 0, y: 0 }}>
              <img style={{ width: "50px", height: "50px", cursor: "pointer" }} src="/ball.png" alt="" />
            </Draggable>
          </div>

          <section style={{ width: "260px" }} className="flex flex-wrap mx-auto">
            {NUM.map((num) => {
              return (
                <div key={num} className="blue cursor-pointer" value={num}>
                  {num}
                </div>
              );
            })}
          </section>
        </fotter>
      </body>
    </>
  );
}