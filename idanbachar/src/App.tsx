import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { getUser } from "./services/github";
import store from "store2";
import Repositories from "./components/Repositories/Repositories";
import Navbar from "./components/Navbar/Navbar";

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
    <div>
      <Navbar title="" items={[{
        item: {
          text: "test",
          link: "test"
        },
        subItems: [
          {
            text: "test",
            link: "test"
          }
        ]
      }]} />
      <div style={{
        paddingTop: "2rem"
      }}>
        <Repositories repositories={[]} title={""} />
      </div>
    </div>
  );
}

export default App;
