import React from "react";
import { Checkbox } from "antd";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";

const Todolist = observer(({ todoStore }) => {
  const handleDelete = id => () => {
    todoStore.removeTask(id);
  };
  const handleComplete = id => () => {
    todoStore.completeTask(id);
  };

  return (
    <List
      dataSource={todoStore.filteredTodos}
      bordered
      renderItem={({ id, title, complete }) => (
        <List.Item
          actions={[
            <button onClick={handleDelete(id)}>
              <DeleteOutlined />
            </button>
          ]}
        >
          <Checkbox checked={complete} onChange={handleComplete(id)}>
            {title}
          </Checkbox>
        </List.Item>
      )}
    ></List>
  );
});

export default Todolist;
