import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)} disabled={props.numOfCakes < number}>
        Buy {number} cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (value) => dispatch(buyCake(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
