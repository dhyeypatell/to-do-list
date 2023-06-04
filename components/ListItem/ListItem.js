import clsx from "clsx";
import Styles from "./ListItem.module.scss";

const ListItem = ({ item, numTasksDone, setNumTasksDone, setUpdateList }) => {
  const handleOnClick = () => {
    if (!item.isDone) {
      item.isDone = true;
      setNumTasksDone(numTasksDone + 1);
    } else {
      item.isDone = false;
      setNumTasksDone(numTasksDone - 1);
    }
  };

  const removeTask = () => {
    item.task = "";
    setUpdateList(true);

    if (item.isDone) {
      setNumTasksDone(numTasksDone - 1);
    }
  };

  return (
    <div className={Styles.container}>
      <li
        className={clsx(Styles.item, item.isDone ? Styles.isDone : undefined)}
        onClick={() => handleOnClick()}
      >
        {item.task}
      </li>
      <button type="button" onClick={removeTask}>
        Remove
      </button>
    </div>
  );
};

export default ListItem;
