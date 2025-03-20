import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import CrudApp from "./components/CrudApp";

const App = () => {
  return (
    <div>
      <h1>React Assignment</h1>
      <h2>Task 1</h2>
      <Counter />
      <h2>Task 2</h2>
      <TodoList />
      <h2>Task 3</h2>
      <CrudApp />
    </div>
  );
};

export default App;
