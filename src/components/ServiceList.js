import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeItem ,setEditItem} from "../redux/actionCreate";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.serviceList);
  const { isSearch, listSearch } = useSelector((state) => state.searchInput);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleSave = (item) => {
    dispatch(setEditItem(item.name, item.price, item.id));
  };

  return (
    <>
      <ul className="servise-list">
        {!isSearch ? (
          items?.map((item) => {
            return (
              <li key={item.id} className="servise-item">
                {item.name} {item.price}
                <button className="btn" onClick={() => handleSave(item)}>
                  <img
                    src="https://img.icons8.com/metro/344/edit.png"
                    alt="redaction"
                  />
                </button>
                <button className="btn" onClick={() => handleRemove(item.id)}>
                  Х
                </button>
              </li>
            );
          })
        ) : (
          <div>
            {!listSearch.length ? (
              <p>Результаты поиска отсутствуют</p>
            ) : (
              listSearch.map((item) => {
                return (
                  <li key={item.id} className="servise-item">
                    {item.name} {item.price}
                    <button className="btn" onClick={() => handleSave(item)}>
                      <img
                        src="https://img.icons8.com/metro/344/edit.png"
                        alt="redaction"
                      />
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Х
                    </button>
                  </li>
                );
              })
            )}
          </div>
        )}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    serviceList: state.serviceList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);