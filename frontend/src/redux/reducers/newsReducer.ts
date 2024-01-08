import {ActiveStory, IState, TAction} from "../../types";
import {ADD_ANSWERS, ADD_COLOROS, ADD_NEWS, ADD_STORY, CHANGE_LOAD} from "../actions";
import {checkAnswers} from "../../helpers/checkAnswers";
import {addColors} from "../../helpers/addColors";

const initialState: IState = {
    stories: [],
    activeStory: {
        story: {},
        comments: []
    },
    answers: [],
    isError: false,
    isLoad: false,
    avatars: {
        'stras': 'asdas',
        'erwer': 'dasdas',
    }
}

export const newsReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ADD_NEWS :
            return {
                ...state,
                stories: action.data,
            }
        case ADD_STORY :
            return {
                ...state,
                activeStory: action.data,
            }
        case ADD_COLOROS :
            return {
                ...state,
                avatars: addColors((state.activeStory as ActiveStory))
            }
        case CHANGE_LOAD :
            return {
                ...state,
                isLoad: action.data,
            }
        case ADD_ANSWERS :
            return {
                ...state,
                answers: checkAnswers(state.answers,action.data.comments),
            }
        default: return state;
    }
}
