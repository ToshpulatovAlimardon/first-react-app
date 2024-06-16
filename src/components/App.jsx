import Filter from "./Filter";
import ShoppingAddForm from "./ShoppingAddForm";
import ShoppingList from "./ShoppingList";
import Information from "./information";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="card">
          <Information />

          <ShoppingAddForm />

          <ShoppingList />

          <Filter />
        </div>
        <img src="/earth.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
