import axios from "axios";
import {changeLoad} from "../actions";
import {ThunkDispatch} from "redux-thunk";
import {Story, TAction} from "../../types";

export const getStoryThunk = (id: string | number,action: (data: Story[] | Story) => TAction, load?: boolean,) : any => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        if (load == true) {
            dispatch(changeLoad(true))
        }
        axios.get(`http://localhost:3010/api/item/${id}`,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
      .then(res => dispatch(action(res.data))).finally(() => {if(load){return dispatch(changeLoad(false))}});
    }
}
