import {Story} from "../../types";


export const ADD_NEWS: string = 'ADD_NEWS';
export const ADD_STORY: string = 'ADD_STORY';
export const ADD_ANSWERS: string = 'ADD_ANSWERS';
export const ADD_COLOROS: string = 'ADD_COLORS';
export const CHANGE_LOAD: string = 'CHANGE_LOAD';

export const addNews = (data: Story[] | Story) => ({data, type: ADD_NEWS});
export const addStory = (data: any) => ({data, type: ADD_STORY});
export const addColors = () => ({type: ADD_COLOROS});
export const addAnswers = (data: Story | Story[]) => ({data, type: ADD_ANSWERS});
export const changeLoad = (data: boolean) => ({data, type: CHANGE_LOAD});
