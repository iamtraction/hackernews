import { BsThreeDots } from "react-icons/bs";
import { RiFireLine, RiSunLine, RiStarLine } from "react-icons/ri";

import Story from "../components/Story";
import StoryType from "../components/StoryType";
import * as api from "../utils/api";

const HomePage = () => {
    const [ selected, setSelected ] = React.useState("top");
    const [ stories, setStories ] = React.useState([]);

    React.useEffect(() => {
        if (stories.length) return;

        api.stories()
        .then(stories => setStories(stories))
        .catch(console.error);
    }, []);

    const getStories = (type) => {
        api.stories(type)
        .then(stories => {
            setSelected(type);
            setStories(stories);
        })
        .catch(console.error);
    };

    return (
        <div style={{ padding: 25 }}>
            <div style={{
                marginTop: 25,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 25,
            }}>
                <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>HackerNews</div>

                <div style={{
                    display: "flex",
                    gap: 20,
                }}>
                    <StoryType name="Top" Icon={ RiFireLine } handler={ getStories } selected={ selected } />
                    <StoryType name="New" Icon={ RiSunLine } handler={ getStories } selected={ selected } />
                    <StoryType name="Best" Icon={ RiStarLine } handler={ getStories } selected={ selected } />
                </div>
            </div>

            <div style={{
                marginTop: 25,
            }}>
                {
                    stories.length
                    ?   stories.map(id => <Story key={ id } id={ id } />)
                    :   <div style={{ textAlign: "center" }}><BsThreeDots /></div>
                }
            </div>
        </div>
    );
}

export default HomePage;
