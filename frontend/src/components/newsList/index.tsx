import React, {FC} from 'react';
import {Container} from "@mui/material";
import {NewsCard} from "../newsCard";
import {Story} from "../../types";

type TProps = {
    news: Story[] | [],
}

export const NewsList: FC<TProps> = (props) => {
    return (
        <>
            { props.news.length === 0 ? 'Wait a minute' : props.news.map((el) => <NewsCard
                key={(el as Story).id}
                by={(el as Story).by}
                date={(el as Story).time}
                score={(el as Story).score}
                title={(el as Story).title}
                id={(el as Story).id}
            />)}
        </>

    );
}
