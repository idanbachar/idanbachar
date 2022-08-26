import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { getUser } from "./services/github";
import store from "store2";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const setUserData = () => {
    const userStorage = store.get("user");
    if (userStorage) {
      dispatch(setUser(userStorage));
      return;
    }
    else {
      (async () => {
        const userData = await getUser();
        if (userData) {
          dispatch(setUser(userData));
        }
      })()
    }
  }

  useEffect(() => {
    setUserData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
