function GoalItem({ goal }) {
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-IN")} </div>
      <h3>{goal.text}</h3>
    </div>
  );
}

export default GoalItem;
