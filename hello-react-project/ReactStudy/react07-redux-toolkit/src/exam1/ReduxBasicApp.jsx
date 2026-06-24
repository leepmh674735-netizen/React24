import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const ReduxBasicApp = () => {
    const counter = useSelector((nowState) => nowState.myCounter.myValue)
    const dispatch = useDispatch();

    return (<>
        <h2>Redux 기본 사용법</h2>
        <h3>현재 값: {counter}</h3>
        <button onClick={() => { dispatch(increment()) }}>증가</button>
        <button onClick={() => { dispatch(decrement()) }}>감소</button>
        <button onClick={() => { dispatch(reset()) }}>리셋</button>
    </>);
};

export default ReduxBasicApp;