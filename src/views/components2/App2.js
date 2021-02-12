import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

const container = {
  background: "#F4F5F8",
  width: '100%',
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const appWrapper = {
  backgroundColor: '#212529',
  width: "25%",
  minWidth: "450px",
  height: "600px",
  padding: "30px",
  boxSizing: "border-box",
  borderRadius: "5px",
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
}

const main = {
  display: "flex",
  flexDirection: "column",
  alignItems: "spaceBetween",
  marginBottom: "50px",
  width: "100%",
}


const App2 = () => {
  return (
    <TaskListContextProvider>
      <div style={container}>
        <div style={appWrapper}>
          <Header />
          <div style={main}>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App2;
