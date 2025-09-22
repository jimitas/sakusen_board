// ゲームの定数定義
export const GAME_CONFIG = {
  PLAYER_NUMBERS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ARROW_PINK_TYPES: [1, 1, 2, 2, 3, 3, 4, 4],
  ARROW_BLUE_TYPES: [5, 5, 6, 6, 7, 7, 8, 8],
};

export const STRATEGY_OPTIONS = [
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

export const COLORS = {
  RED: "#DC2626", // 濃い赤 - 野外視認性向上
  BLUE: "#1D4ED8", // 濃い青 - 野外視認性向上
  FIELD: "#6B46C1", // 濃い紫 - 野外視認性向上&色弱対応（赤・緑色弱にも区別しやすい）
  WHITE: "#fff",
  BLACK: "#000",
};

export const PLAYER_TYPES = {
  RED: "red",
  BLUE: "blue",
};

export const ARROW_TYPES = {
  PINK: "pink",
  BLUE: "blue",
};