import {IState} from "../../types";

export const newsSelector = (state: IState) => state.stories;
export const timeSelector = (state: IState) => state.time;
export const storySelector = (state: IState) => state.activeStory;
export const answersSelector = (id: number | string,state: IState) => state.answers.filter((el) => el.parent == id);
export const loadSelector = (state:IState) => state.isLoad;
