import CrudOperations from "./components/CrudOperations";
// import FirebaseAuth from "./components/FirebaseAuth";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div>
      <h1>React Assignment</h1>
      <h2>Task 1</h2>
      <UserTable />
      <h2>Task 2</h2>
      {/* <FirebaseAuth /> */}
      <CrudOperations />
    </div>
  );
};

export default App;
