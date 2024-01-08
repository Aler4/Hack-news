import {FC, useEffect, useState} from 'react';
import {Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import {createRandomColor} from "../../helpers";
import {convertDate} from "../../helpers";
import {Story} from "../../types";
import {getStoryThunk} from "../../redux/thunks";
import {addAnswers} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {answersSelector, avatarSelector} from "../../redux/selectors";
import {Comments} from "../commentTree";

export const CommentCard: FC<{story: Story,getAnwsers: (id: number | string) => void}> = ({story,getAnwsers}) => {
    let answers = useSelector(answersSelector.bind(this,story.id));

    let [show, setShow] = useState(false);

    const showAnswers = () => {
        if (!!story.kids && answers.length == 0) {
            getAnwsers(story.id);
        };
        setShow(!show);
    };

    return (
        <ListItem alignItems={'flex-start'}>
            <ListItemAvatar>
                <Avatar sx={{bgcolor: 'grey'}}>
                    {story.by ? (story.by as string)[0].toUpperCase() : 'A'}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={`${story.by ? story.by : 'Anonymus'}`}
                secondary={
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography
                            sx={{display: 'inline'}}
                            component='span'
                            variant='body2'
                        >
                            {convertDate(story.time,true)}
                        </Typography>
                        <Divider style={{marginTop: '5px'}} />
                        <Typography
                            sx={{display: 'inline', margin: '10px 0'}}
                            component='span'
                            color='text.primary'
                            variant='body2'

                        >
                            {story.text}
                        </Typography>

                        {!!story.kids ?
                            show && answers.length == 0 ? <CircularProgress sx={{margin: '15px auto 0' }} / > :
                            <Button onClick={showAnswers} variant={"text"}>{show ? 'hide answers': 'show answers'}</Button>
                            : null}
                        {answers.length > 0 && show ? <Comments stories={answers} /> : null}
                    </div>
                }
            />

        </ListItem>
    )
}
