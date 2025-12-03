"use client";
import { useState } from "react";
import { getAgeFromRD, getLifeDurationFromRD } from "../lib/rd";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { departments, getParentDepartments } from "../lib/departments"

export default function Home() {
  const [rd, setRd] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [life, setLife] = useState<string>("");

const parents = getParentDepartments(11, departments);
console.log(parents);

  const handleCalculate = () => {
    try {
      const a = getAgeFromRD(rd);
      const l = getLifeDurationFromRD(rd);

      setAge(a);
      setLife(l.formatted);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setAge(null);
      setLife(error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>РД - Нас ба Амьдралын хугацаа</h1>

      <input
        type="text"
        placeholder="РД оруулна уу..."
        value={rd}
        onChange={(e) => setRd(e.target.value)}
        style={{ padding: 10, fontSize: 18, width: 250 }}
      />

      <button
        onClick={handleCalculate}
        style={{
          marginLeft: 10,
          padding: "10px 20px",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Тооцоолох
      </button>

      <div style={{ marginTop: 20, fontSize: 20 }}>
        {age !== null && <p>Нас: {age}</p>}
        {life && <p>Амьдралын хугацаа: {life}</p>}
      </div>
    </div>
  );
}
