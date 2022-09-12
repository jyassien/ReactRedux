import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, amountAdded } from "./features/counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleClick = (amount = 0) => {
    dispatch(incremented());
    //dispatch(amountAdded(amount));
  };
  const handleAmountClick = () => {
    dispatch(amountAdded(Number(amount)));
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>{count}</button>
      </div>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAmountClick}>Add Amount</button>
      </div>
    </div>
  );
}

export default App;
