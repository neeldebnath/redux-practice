import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h1>Numbers of cake - {numOfCakes} (With Hook)</h1>
      <button onClick={() => dispatch(buyCake())} disabled={numOfCakes < 1}>
        Buy Cake
      </button>
    </Fragment>
  );
};

export default HooksCakeContainer;
