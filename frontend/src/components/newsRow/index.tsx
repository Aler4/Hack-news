import {FC} from 'react';
import {TableCell, TableRow, Typography} from "@mui/material";
import {Link} from "react-router-dom";

type TProps = {
    isHeader: boolean,
    title: string | undefined,
    value?: string | number,
    id?: number,
}

export const NewsRow: FC<TProps> = (props) => {
    return (
        <TableRow>
            <TableCell style={{display: 'flex'}}>
                {props.isHeader ? <Link to={`/story/${props.id}`} style={{fontSize: '3rem',lineHeight: 1.2 ,textDecoration: 'none',color: '#FFFF'}} >{props.title}</Link> : <Typography color={props.isHeader ? "#ffff": '#000000'} pr={props.isHeader ? 0 : 3} variant={props.isHeader ? 'h3' : 'h4'} component='h4'>
                    {props.title}:
                </Typography>
                }

                <Typography variant='h4'  component='h4'>
                    {props.value}
                </Typography>
            </TableCell>
        </TableRow>
    )
}
