import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import Styles from "./Board.module.scss";

const Board = ({ tasks, setTasks }) => {
  const [numTasksDone, setNumTasksDone] = useState(0);
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    const newList = tasks.filter((taskObject) => taskObject.task !== "");
    setTasks(newList);
    setUpdateList(false);
  }, [updateList]);

  return (
    <div className={Styles.container}>
      <p>You have {tasks.length} tasks.</p>
      <p>{numTasksDone} tasks are done.</p>
      <ol>
        {tasks.map((item, i) => (
          <ListItem
            item={item}
            numTasksDone={numTasksDone}
            setNumTasksDone={setNumTasksDone}
            setUpdateList={setUpdateList}
            key={i}
          />
        ))}
      </ol>
    </div>
  );
};

export default Board;
