import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { getAllData, USERNAME } from "./services/github";
import Repositories from "./components/Repositories/Repositories";
import Navbar from "./components/Navbar/Navbar";
import menu from "./data/menu.json"
import { RootState } from "./redux/store";
import { setRepositories } from "./redux/slices/repositoriesSlice";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);
  const repositories = useSelector((state: RootState) => state.repositories.value);

  const getData = async () => {
    const data = await getAllData();
    if (data && data.userData && data.repositoriesData) {
      dispatch(setUser(data.userData));
      dispatch(setRepositories(data.repositoriesData.filter(repository => !repository.name.includes(USERNAME))));
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Modal />
      <Navbar
        title={user?.name}
        items={menu}
        img_url={user?.avatar_url}
      />
      <div className="midBody">
        <Repositories
          title={"Repositories"}
          repositories={repositories}
        />
      </div>
    </div >
  );
}

export default App;
