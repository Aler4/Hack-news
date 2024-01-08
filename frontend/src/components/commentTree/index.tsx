import {FC, useCallback, useEffect, useState} from 'react';
import {Story} from "../../types";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {createRandomColor} from "../../helpers/randomColor";
import {convertDate} from "../../helpers/converDate";
import {useDispatch} from "react-redux";
import {CommentCard} from "../commentCard";
import {getStoryThunk} from "../../redux/thunks";
import {addAnswers} from "../../redux/actions";


export const Comments: FC<{stories: Story[]}> = ({stories}) => {
    let dispatch = useDispatch();
    let getAnswers = useCallback((id: number | string) => {
            dispatch(getStoryThunk(id,addAnswers));
    },[stories]);
    return (
        <List>
            {stories.map(el => (
                <CommentCard getAnwsers={getAnswers} key={el.id} story={el}/>
            ))}
        </List>
    )
}
