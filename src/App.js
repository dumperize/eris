import React from "react";
import { Typography, Row, Col } from "antd";

import "./App.css";
import "antd/dist/antd.css";

import Todolist from "./components/todolist";
import AddTask from "./components/addTask";
import Filter from "./components/filter";

function App({ store }) {
  const todoStore = store.todoStore;
  return (
    <div className="app">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={2}>ToDo List</Typography.Title>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={3}>
          <AddTask addTask={todoStore.addTask.bind(todoStore)} />
        </Col>
        <Col span={9}>
          <div className="right">
            <Filter todoStore={todoStore} />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Todolist todoStore={todoStore} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
