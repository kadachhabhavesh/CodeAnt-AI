import Sidebar from "../Sidebar/Sidebar";
import RepositoryList from "../RepositoryList/RepositoryList";

const Repositories = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="mainContent">
                <RepositoryList />
            </div>
        </div>
    )
}

export default Repositories