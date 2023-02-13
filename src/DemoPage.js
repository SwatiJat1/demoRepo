import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./slice/demoSlice";

const DemoPage = () => {
  const [todo, setTodo] = useState({ id: "", task: "" });
  const [editValue, setEditValue] = useState({});
  const listValue = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setTodo({ id: new Date().getUTCMilliseconds(), task: value });
  };

  const saveTutorial = () => {
    if (editValue.task) {
      //   const editItem = listValue?.filter((item) => {
      //     if (item.id === editValue?.id) {
      //       let task = item?.task;

      //       task = todo?.task;
      //       console.log("CCCCCCCCCCC", task);
      //       return task;
      //     } else return item;
      //   });
      //   console.log("DDDDDDDDDDD", editItem, "todo=============>", editValue);
      const editItem = listValue?.findIndex(
        (item) => item?.id === editValue?.id && todo
      );
      listValue[editItem] = {
        ...listValue[editItem],
        ...todo,
      };
      const editList = [listValue[editItem]];

      console.log("DDDDDDDDD", editList);

      setEditValue({});
      // dispatch(create(editItem));
    } else {
      dispatch(create([...listValue, todo]));
    }
    setTodo({ id: "", task: "" });
  };

  const deleteTutorial = (selectedValue) => {
    const deleteItem = listValue?.filter(
      (item) => item?.id !== selectedValue?.id && item
    );
    dispatch(create(deleteItem));
  };

  const editTutorial = (selectedValue) => {
    setEditValue(selectedValue);
    setTodo(selectedValue);
  };

  return (
    <div>
      <input value={todo.task} onChange={(e) => onChangeHandler(e)} />
      <button onClick={saveTutorial} className="btn btn-success">
        Submit
      </button>

      <div>
        {listValue?.map((item) => {
          return (
            <div key={item?.id}>
              {item?.task} &nbsp;
              <button
                onClick={() => deleteTutorial(item)}
                className="btn btn-success"
              >
                delete
              </button>{" "}
              &nbsp;
              <button
                onClick={() => editTutorial(item)}
                className="btn btn-success"
              >
                edit
              </button>{" "}
              &nbsp;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoPage;
