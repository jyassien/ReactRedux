import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { depositModey, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // console.log();
  return (
    <div className="App">
      <h4> {state.account}</h4>
      <button onClick={() => depositModey(2000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
