import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addItem, deleteItem, updateItem } from "../store/crudSlice";

const CrudApp = () => {
  const items = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    dispatch(updateItem({ id, newText: editText }));
    setEditText("");
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={() => dispatch(addItem(newItem))}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <input value={editText} onChange={(e) => setEditText(e.target.value)} />
            <button onClick={() => handleUpdate(item.id)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
