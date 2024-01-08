import React, {FC, useEffect} from 'react';
import {NewsCard, NewsList} from "../components";
import {Story} from "../types";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {newsSelector} from "../redux/selectors";
import {getStoriesThunk} from "../redux/thunks/getStoriesThunk";
import {addNews} from "../redux/actions";

export const NewsPage: FC = () => {
    let news = useSelector(newsSelector);
    console.log('gha')
    let dispatch = useDispatch();
    useEffect(() => {
        if (news.length === 0) {
            dispatch(getStoriesThunk(addNews));
        }

    },[news])
    return (
        <Container>
        <NewsList news={(news as Story[])}></NewsList>
        </Container>
    )

}
