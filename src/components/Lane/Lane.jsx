import Task from "../Task/Task";
import "./Lane.css";

function Lane({ title, loading, error, tasks }) {
  return (
    <div className="Lane-wrapper">
      <h2>{title}</h2>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        tasks.map((tasks) => (
          <Task key={tasks.id} key={tasks.title} key={tasks.body} />
        ))
      )}
    </div>
  );
}

export default Lane;
