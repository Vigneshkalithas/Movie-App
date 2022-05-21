import { useState } from "react";
import ColorBox from "./ColorBox";

export function AddColor() {
  // const color="skyblue";
  const [color, setColor] = useState("white");
  const [colorList, setColorList] = useState(["orange", "red", "blue"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)} placeholder="enter a color" style={styles} type="text"
          value={color} />
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => <ColorBox color={clr} />)}

    </div>
  );
}
