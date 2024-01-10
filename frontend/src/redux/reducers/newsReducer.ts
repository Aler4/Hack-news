import {ActiveStory, IState, TAction} from "../../types";
import {ADD_ANSWERS, ADD_COLOROS, ADD_NEWS, ADD_STORY, CHANGE_LOAD} from "../actions";
import {checkAnswers} from "../../helpers/checkAnswers";
import {createDate} from "../../helpers/createDate";

const initialState: IState = {
    stories: [],
    activeStory: {},
    answers: [],
    isError: false,
    isLoad: false,
    time: createDate()
}

export const newsReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ADD_NEWS :
            return {
                ...state,
                time: createDate(),
                stories: action.data,
            }
        case ADD_STORY :
            return {
                ...state,
                activeStory: action.data,
            }
        case CHANGE_LOAD :
            return {
                ...state,
                isLoad: state.isLoad,
            }
        case ADD_ANSWERS :
            return {
                ...state,
                answers: checkAnswers(state.answers,action.data.comments),
            }
        default: return state;
    }
}
