const fetch = require("node-fetch");

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export const stories = async (type = "top") => {
    const res = await fetch(BASE_URL + type + "stories.json", {
        headers: {
            "Accept": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

export const story = async (id) => {
    const res = await fetch(BASE_URL + "item/" + id + ".json", {
        headers: {
            "Accept": "application/json",
        },
    });
    const data = await res.json();
    return data;
};
