import React, {FC, useEffect} from 'react';
import {Header, NewsCard, NewsList} from "../components";
import {Story} from "../types";
import {Box, CircularProgress, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loadSelector, newsSelector} from "../redux/selectors";
import {getStoriesThunk} from "../redux/thunks/getStoriesThunk";
import {addNews} from "../redux/actions";

export const NewsPage: FC = () => {
    let news = useSelector(newsSelector);
    let isLoad = useSelector(loadSelector)

    let dispatch = useDispatch();
    useEffect(() => {
        if (news.length === 0 && !isLoad) {
            dispatch(getStoriesThunk(addNews));
        }
        else if (!isLoad) {
            setInterval(() => {
                dispatch(getStoriesThunk(addNews));
            },180000)
        }
    },[])
    return (
        <Box>
            <Header location={'news'}></Header>
            <Container sx={{paddingTop: '100px'}}>
                {isLoad || news.length === 0 ? <CircularProgress /> : <NewsList news={(news as Story[])}></NewsList>}
            </Container>
        </Box>

    )

}
