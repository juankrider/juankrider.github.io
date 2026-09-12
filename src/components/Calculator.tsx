"use client";

import { useState } from "react";

type Op = "+" | "-" | "×" | "÷" | null;

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [acc, setAcc] = useState<number | null>(null);
  const [op, setOp] = useState<Op>(null);
  const [fresh, setFresh] = useState(true);

  const inputDigit = (d: string) => {
    if (fresh) {
      setDisplay(d);
      setFresh(false);
    } else {
      setDisplay(display === "0" ? d : display + d);
    }
  };

  const inputDot = () => {
    if (fresh) {
      setDisplay("0.");
      setFresh(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const chooseOp = (next: Op) => {
    const cur = parseFloat(display);
    if (acc === null) {
      setAcc(cur);
    } else if (!fresh && op) {
      setAcc(apply(acc, cur, op));
      setDisplay(String(apply(acc, cur, op)));
    }
    setOp(next);
    setFresh(true);
  };

  const equals = () => {
    if (acc === null || op === null) return;
    const cur = parseFloat(display);
    const result = apply(acc, cur, op);
    setDisplay(String(result));
    setAcc(null);
    setOp(null);
    setFresh(true);
  };

  const clear = () => {
    setDisplay("0");
    setAcc(null);
    setOp(null);
    setFresh(true);
  };

  const apply = (a: number, b: number, o: Exclude<Op, null>): number => {
    switch (o) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b === 0 ? NaN : a / b;
    }
  };

  return (
    <div className="w-full max-w-[300px] select-none border border-ink/25 bg-paper p-5">
      {/* Brand */}
      <div className="mono mb-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-gray-mid">
        <span>JCC-01</span>
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
      </div>

      {/* Display */}
      <div className="mono mb-5 flex h-12 items-center justify-end border border-ink/20 bg-ground px-3 text-2xl text-ink">
        {display}
      </div>

      {/* Teclado */}
      <div className="grid grid-cols-4 gap-2">
        {/* Fila C */}
        <button
          onClick={clear}
          className="mono col-span-4 h-10 bg-gray-mid text-sm text-paper transition-colors duration-100 hover:opacity-80"
          aria-label="Clear"
        >
          C
        </button>

        {/* Fila 7 8 9 ÷ */}
        <Digit k="7" onClick={() => inputDigit("7")} />
        <Digit k="8" onClick={() => inputDigit("8")} />
        <Digit k="9" onClick={() => inputDigit("9")} />
        <Op k="÷" onClick={() => chooseOp("÷")} />

        {/* Fila 4 5 6 × */}
        <Digit k="4" onClick={() => inputDigit("4")} />
        <Digit k="5" onClick={() => inputDigit("5")} />
        <Digit k="6" onClick={() => inputDigit("6")} />
        <Op k="×" onClick={() => chooseOp("×")} />

        {/* Fila 1 2 3 - */}
        <Digit k="1" onClick={() => inputDigit("1")} />
        <Digit k="2" onClick={() => inputDigit("2")} />
        <Digit k="3" onClick={() => inputDigit("3")} />
        <Op k="-" onClick={() => chooseOp("-")} />

        {/* Fila 0 . = + */}
        <Digit k="0" onClick={() => inputDigit("0")} />
        <button
          onClick={inputDot}
          className="mono h-11 text-sm text-ink transition-colors duration-100 hover:opacity-80"
          style={{ background: "var(--calc-key)" }}
        >
          .
        </button>
        <button
          onClick={equals}
          className="mono h-11 text-sm transition-colors duration-100 hover:opacity-80"
          style={{ background: "var(--calc-eq)", color: "var(--calc-eq-fg)" }}
        >
          =
        </button>
        <Op k="+" onClick={() => chooseOp("+")} />
      </div>
    </div>
  );
}

function Digit({ k, onClick }: { k: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mono h-11 text-sm text-ink transition-colors duration-100 hover:opacity-80"
      style={{ background: "var(--calc-key)" }}
    >
      {k}
    </button>
  );
}

function Op({ k, onClick }: { k: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mono h-11 bg-signal text-sm text-paper transition-colors duration-100 hover:opacity-80"
      aria-label={`Operator ${k}`}
    >
      {k}
    </button>
  );
}
