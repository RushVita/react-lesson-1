import Friends from "./components/Friends";
import friends from "./components/friend.json";

function App() {
  return (
    <>
      <div>
        {false}
        {null}
        {undefined}
        <Friends initialFriends={friends} /> 
        {5 < 10 && <p>Hello</p>}
      </div>
    </>
  );
}

export default App;
