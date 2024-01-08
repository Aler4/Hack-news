import {createRandomColor} from "./randomColor";
import {ActiveStory} from "../types";

export const addColors = (story: ActiveStory) => {
    console.log(story);
    let data = [story.story, ...story.comments];
    let res: any = {};
    if(!!data) {
        for (let i = 0; i <= data.length - 1; i++) {
            console.log(data)
            res[data[i].id] = createRandomColor();
        }
    }
    console.log(res);
    return res;
}
