import React from "react";
import { Radio } from "antd";
import { ALL, COMPLETED, UNCOMPLETED } from "../store/todoStore";
import { observer } from "mobx-react";

const Filter = observer(({ todoStore }) => {
  const handleChange = e => {
    todoStore.changeFilter(e.target.value);
  };
  return (
    <Radio.Group value={todoStore.filter} onChange={handleChange}>
      <Radio.Button value={ALL}>All</Radio.Button>
      <Radio.Button value={COMPLETED}>Completed</Radio.Button>
      <Radio.Button value={UNCOMPLETED}>Uncompleted</Radio.Button>
    </Radio.Group>
  );
});
export default Filter;
