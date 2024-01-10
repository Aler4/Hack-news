import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getStoryThunk} from "../redux/thunks";
import {CircularProgress, Container} from "@mui/material";
import {StoryPreview} from "../components/storyPreview";
import {loadSelector, storySelector} from "../redux/selectors";
import { addStory} from "../redux/actions";
import {ActiveStory} from "../types";
import {Header} from "../components";


export const StoryPage = () => {
    let params = useParams<{id: string}>();
    const history = useHistory()
    let dispatch = useDispatch();
    let isLoad = useSelector(loadSelector);
    const data: ActiveStory = (useSelector(storySelector) as ActiveStory);
    useEffect(() => {
        if(!data.story || data.story.id != +params.id) {
            dispatch(getStoryThunk((params.id as string),addStory,true));
        }
    },[]);

    return  (
        <>
            <Header location={'story'} callback={history.goBack}></Header>
            <Container sx={{paddingTop: '100px'}}>
                {!data.story && !isLoad || data.story.id != +params.id ? <CircularProgress /> : <StoryPreview data={data} ></StoryPreview>}
            </Container>
        </>

    )
}
