import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStoryThunk} from "../redux/thunks";
import {Container} from "@mui/material";
import {StoryPreview} from "../components/storyPreview";
import {loadSelector, storySelector} from "../redux/selectors";
import {addColors, addStory} from "../redux/actions";
import {ActiveStory} from "../types";


export const StoryPage = () => {
    let params = useParams<{id: string}>();
    let dispatch = useDispatch();
    let isLoad = useSelector(loadSelector);
    const data: ActiveStory = (useSelector(storySelector) as ActiveStory);
    useEffect(() => {
        if(!data.story || data.story.id != +params.id) {
            dispatch(getStoryThunk((params.id as string),addStory,true));
        }
    },[]);
    console.log(data)

    return  (
        <Container>
            {!data.story || data.story.id != +params.id ? 'Wait a second' : <StoryPreview data={data} ></StoryPreview>}
        </Container>
    )
}
