import { useState } from "react";
export default function RandomColor() {
  const [rgbColor, setRgbColor] = useState("rgb(255,255,255)");
  const [hexColor, setHexColor] = useState("#fff");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }
  function generateHexColor() {
    setTypeOfColor("hex");
    let hexColors = "#";
    for (let i = 1; i <= 6; i++) {
      hexColors += hex[randomColor(hex.length)];
    }
    setHexColor(hexColors);
  }

  function generateRgbColor() {
    setTypeOfColor("rgb");
    const r = randomColor(255);
    const g = randomColor(255);
    const b = randomColor(255);
    setRgbColor(`rgb(${r},${g},${b})`);
  }

  return (
    <main
      className="h-screen bg-black pt-10 font-openSans"
      style={{ backgroundColor: typeOfColor == "hex" ? hexColor : rgbColor }}
    >
      <div className="mx-auto flex w-full max-w-xs flex-col justify-center gap-6 px-6 sm:max-w-none sm:flex-row">
        <button
          type="button"
          className="bg-blueDark hover:text-blueDark border-blueDark rounded-lg border px-8 py-2 text-white transition hover:bg-white"
          onClick={() => generateHexColor()}
        >
          Create HEX Color
        </button>
        <button
          type="button"
          className="bg-blueDark hover:text-blueDark border-blueDark rounded-lg border px-8 py-2 text-white transition hover:bg-white"
          onClick={() => generateRgbColor()}
        >
          Create RGB Color
        </button>
        <button
          type="button"
          className="bg-blueDark hover:text-blueDark border-blueDark rounded-lg border px-8 py-2 text-white transition hover:bg-white"
          onClick={() =>
            typeOfColor == "hex" ? generateHexColor() : generateRgbColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="mx-auto mt-12 flex max-w-lg flex-col justify-center gap-10 text-center lg:mt-20">
        <h3 className="text-2xl md:text-4xl">{typeOfColor} Color</h3>
        <h2 className="text-5xl font-bold tracking-widest md:text-6xl">
          {typeOfColor == "hex" ? hexColor : rgbColor}
        </h2>
      </div>
    </main>
  );
}
