import {IState} from "../../types";

export const newsSelector = (state: IState) => state.stories;
export const storySelector = (state: IState) => state.activeStory;
export const answersSelector = (id: number | string,state: IState) => state.answers.filter((el) => el.parent == id);
export const loadSelector = (state:IState) => state.isLoad;
export const avatarSelector = (id: number ,state:IState) => {
    if(id && state.avatars) {
        return state.avatars[id];
    }
    return state.avatars;
};
