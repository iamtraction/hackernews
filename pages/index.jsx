import Story from "../components/Story";
import * as api from "../utils/api";

const HomePage = () => {
    const [ stories, setStories ] = React.useState([]);

    React.useEffect(() => {
        if (stories.length) return;

        api.stories()
        .then(stories => setStories(stories))
        .catch(console.error);
    }, []);

    return (
        <div>
            { stories.map(id => <Story key={ id } id={ id } />) }
        </div>
    );
}

export default HomePage;
