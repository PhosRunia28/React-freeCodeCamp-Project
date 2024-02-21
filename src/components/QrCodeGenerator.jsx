import cn from "classnames";
import { useState } from "react";
import QRCode from "react-qr-code";
export default function QrCodeGenerator() {
  const [input, setInput] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <main
      className={cn(
        "absolute left-1/2 top-1/2 mx-auto w-full max-w-xl -translate-x-1/2 -translate-y-1/2 font-openSans",
        {
          "pb-52": input === "",
          "pb-0": input,
        },
      )}
    >
      <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
        QR Code Generator
      </h2>
      <div className="flex flex-col justify-center gap-6">
        <input
          type="text"
          name="QrCode"
          placeholder="Type Something..."
          onChange={(e) => handleInput(e)}
          value={input}
          className="mx-auto w-full max-w-xs rounded-md  border border-black px-4 py-2"
        />
        {input && (
          <QRCode
            value={input}
            bgColor="#fff"
            className="mx-auto w-full max-w-md"
          />
        )}
      </div>
    </main>
  );
}
