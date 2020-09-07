import { BiUpvote, BiDownvote } from "react-icons/bi";

import * as api from "../utils/api";

const Story = ({ id }) => {
    const [ story, setStory ] = React.useState({});

    React.useEffect(() => {
        if (story.id) return;

        api.story(id)
        .then(story => setStory(story))
        .catch(console.error);
    }, []);

    return (
        story.id
        ?   <a
                id={ id }
                href={ story.url ? story.url : ("https://news.ycombinator.com/item?id=" + story.id) }
                style={{
                    padding: 15,
                    display: "flex",
                    gap: 15,
                    border: "1px solid rgba(100, 100, 100, .5)",
                    borderRadius: 3,
                    backgroundColor: "rgba(100, 100, 100, .3)",
                    marginBottom: 20,
                }}
            >
                <div style={{ textAlign: "center" }}>
                    {
                        story.score >= 0
                        ?   <BiUpvote color="orange" />
                        :   <BiDownvote color="lightblue" />
                    }
                    <div>{ story.score }</div>
                </div>
                <div>
                    <div style={{ color: "darkgrey" }}>Posted by { story.by } on { new Date(story.time * 1000).toLocaleString() }</div>
                    <div>{ story.title }</div>
                </div>
            </a>
        :   null
    );
};

export default Story;
