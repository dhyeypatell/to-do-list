"use client";
import Styles from "./page.module.scss";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Board from "../../components/Board/Board";
import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.innerContainer}>
        <h1 className={Styles.title}>To-Do List</h1>
        <Form setTasks={setTasks} />
        <Board tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
