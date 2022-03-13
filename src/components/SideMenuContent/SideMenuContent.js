import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { counterActions } from "../../store/slices/counter-slice";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideMenuContent = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <Wrap>
      {props.children}
      <p>{count}</p>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
    </Wrap>
  );
};

export default SideMenuContent;
