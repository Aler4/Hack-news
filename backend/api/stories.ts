import axios from "axios";
import {STORIES_API_URL, STORIES_LIMIT, STORIES_SUFFIX} from "./constants";
import {Story} from "../types";
import {sortStories} from "./utils";

export const getStoriesIds = async (useLimit = false): Promise<number[]> => {
    const url = `${STORIES_API_URL}topstories${STORIES_SUFFIX}`;
    const res = await axios.get(url);
    if (res.status === 200 && Array.isArray(res.data)) {
        if(useLimit) {
            const limitStories = res.data.slice(0,STORIES_LIMIT);
            return limitStories;
        }
        else return res.data;
    }
    return [];
};


export const getItemByID = async (id: number): Promise<Story | null> => {
    const url = `${STORIES_API_URL}/item/${id}${STORIES_SUFFIX}`;
    const res = await axios.get(url);
    if (res.status === 200 && res.data) {
        return res.data;
    }
    return null;
}

export const getItems = (ids: number[], getStory: (storyID: number) => Promise<any | null>): Promise<Story | unknown> => {
    return Promise.all(ids.map(id => getStory(id))).then(data => sortStories(data));
};
