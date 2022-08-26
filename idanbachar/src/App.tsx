import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { getAllData } from "./services/github";
import Repositories from "./components/Repositories/Repositories";
import Navbar from "./components/Navbar/Navbar";
import menu from "./data/menu.json"
import { RootState } from "./redux/store";
import { setRepositories } from "./redux/slices/repositoriesSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);
  const repositories = useSelector((state: RootState) => state.repositories.value);

  const getData = async () => {
    const data = await getAllData();
    if (data && data.userData && data.repositoriesData) {
      dispatch(setUser(data.userData));
      dispatch(setRepositories(data.repositoriesData));
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Navbar
        title={user?.name}
        items={menu}
        img_url={user?.avatar_url}
      />
      <div className="midBody">
        <Repositories
          title={""}
          repositories={repositories}
        />
      </div>
    </div >
  );
}

export default App;
