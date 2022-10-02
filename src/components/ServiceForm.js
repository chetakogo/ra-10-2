import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeValue, addInputValue, resetForm } from "../redux/actionCreate";

const ServiceForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.serviceAdd);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeValue(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addInputValue(data.name, data.price, data.id));
    dispatch(resetForm());
  };

  const handleClearInputs = (event) => {
    event.preventDefault();
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={data.name} required />
      <input
        name="price"
        type="number"
        onChange={handleChange}
        value={data.price}
        required
      />
      <button type="submit">Save</button>
      <button onClick={handleClearInputs}>Cansel</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceAdd: state.serviceAdd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);