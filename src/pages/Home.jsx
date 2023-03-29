
import '../components/comp-styles.scss';
import Navbar from '../components/Navbar';
import SideBarNchatFeed from '../components/SideBarNchatFeed';

const Home = () => {

    return (
        <div className="home">

            <Navbar />
            <SideBarNchatFeed />

        </div>
    );
};

export default Home;