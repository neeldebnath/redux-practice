import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer(props) {
  return (
    <Fragment>
      <h1>Number of Cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCake} disabled={props.numOfCakes < 1}>
        Buy cake
      </button>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
