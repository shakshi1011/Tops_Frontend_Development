import { useChecklist } from "../context/ChecklistContext";

const options = ["React", "Redux", "Recoil", "Next.js", "Node.js"];

const Checklist = () => {
  const { selectedItems, toggleItem } = useChecklist();

  return (
    <div>
      <h2>Technology Checklist</h2>
      {options.map((option) => (
        <label key={option} style={{ display: "block", margin: "5px 0" }}>
          <input
            type="checkbox"
            checked={selectedItems.includes(option)}
            onChange={() => toggleItem(option)}
          />
          {option}
        </label>
      ))}
      <h3>Selected Items:</h3>
      <ul>
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => <li key={item}>{item}</li>)
        ) : (
          <p>No options selected.</p>
        )}
      </ul>
    </div>
  );
};

export default Checklist;
