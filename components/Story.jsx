import { BiCommentDetail, BiUpvote, BiDownvote } from "react-icons/bi";

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
                target="_blank"
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
                <div style={{ width: 50, textAlign: "center" }}>
                    {
                        story.score >= 0
                        ?   <BiUpvote color="orange" />
                        :   <BiDownvote color="lightblue" />
                    }
                    <div>{ story.score }</div>
                </div>
                <div>
                    <div style={{
                        marginBottom: 10,
                        color: "darkgrey",
                        fontSize: ".9em",
                    }}>
                        Posted by { story.by } on { new Date(story.time * 1000).toLocaleString() }
                    </div>

                    <div>{ story.title }</div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        fontSize: ".8em",
                        gap: 20,
                    }}>
                        {
                            story.type && (
                                <div style={{
                                    padding: "2px 5px",
                                    backgroundColor: "rgba(100, 100, 100, .3)",
                                    borderRadius: 5,
                                    color: "darkgrey",
                                }}>
                                    { story.type.toUpperCase() }
                                </div>
                            )
                        }
                        {
                            story.descendants && story.descendants !== 0
                            ?   <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    color: "darkgrey",
                                }}>
                                    <BiCommentDetail />
                                    <span>{ story.descendants.toLocaleString() } Comments</span>
                                </div>
                            :   null
                        }
                    </div>
                </div>
            </a>
        :   null
    );
};

export default Story;
