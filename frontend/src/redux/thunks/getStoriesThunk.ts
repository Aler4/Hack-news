import axios from "axios";
import {addNews, changeLoad} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {Story, TAction} from "../../types";

export const getStoriesThunk = (action: (data: Story[] | Story) => TAction) : any => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        dispatch(changeLoad(true))
        axios.get('http://localhost:3010/api/stories',{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => dispatch(action(res.data))).finally(() => dispatch(changeLoad(false)));
    }
}
