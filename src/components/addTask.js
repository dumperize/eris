import React, { useState } from "react";
import { Form,Button, Modal, Input } from "antd";

const AddTask = ({ addTask }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        addTask(values.title);
        setOpen(false);
      })
      .catch(info => {
        console.log("Validate Failed:", info);
      });
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add
      </Button>
      <Modal
        title="Add Task"
        visible={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} name="addTask">
          <Form.Item
            label="Name Task"
            name="title"
            rules={[
              { required: true, message: "Please input your task name!" }
            ]}
          >
            <Input placeholder="enter name task..." />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTask;
