import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeValue, serviceSearch} from "../redux/actionCreate";

const ServiceSearch = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);


  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeValue(name, value));
    dispatch(serviceSearch(serviceList, value));
  };


  return (
    <div className="seacrh">
      <input name="search" onChange={handleChange} />
      <button>Поиск</button>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSearch);