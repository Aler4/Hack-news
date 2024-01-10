import {Card, Table, TableBody, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {FC, useState} from "react";
import {NewsRow} from "../newsRow";
import {convertDate} from "../../helpers/converDate";
import {useSelector} from "react-redux";
import {loadSelector} from "../../redux/selectors";

export type TProps = {
    title: string | undefined,
    by?: string,
    date?: number | string,
    score?: number,
    id?: number
}

export const NewsCard: FC<TProps> = (props) => {
    return (
        <Card style={{marginBottom: '30px'}}>
           <TableContainer>
               <Table>
                   <TableHead style={{textAlign: 'center',backgroundColor: '#2B2B2B', color: '#ffff'}}>
                      <NewsRow id={props.id} isHeader={true} title={props.title}/>
                   </TableHead>
                   <TableBody>
                        <NewsRow isHeader={false} title='Rating' value={props.score} />
                        <NewsRow isHeader={false} title='Author' value={props.by} />
                        <NewsRow isHeader={false} title='Date' value={convertDate(props.date)} />
                   </TableBody>
               </Table>
           </TableContainer>
        </Card>
    )
}
