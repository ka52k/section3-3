import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(0);
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      {/* <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button> */}

      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
