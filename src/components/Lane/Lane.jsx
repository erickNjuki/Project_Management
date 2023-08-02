/* eslint-disable react/prop-types */
import Task from "../Task/Task";
import "./Lane.css";

function Lane({
  laneId,
  title,
  loading,
  error,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  return (
    <div className="Lane-wrapper" onDragOver={onDragOver}>
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
            onDrop={(e) => onDrop(e, laneId)}
          />
        ))
      )}
    </div>
  );
}

export default Lane;
