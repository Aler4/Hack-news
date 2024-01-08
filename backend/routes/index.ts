import express,{Express, Response,Request} from 'express';
import {ROUTERS} from "./constants";
import {getItemByID, getItems, getStoriesIds} from "../api";

let routers = express.Router();



routers.get(ROUTERS.story,(req,res) => {
    getStoriesIds(true).then(data => getItems(data, getItemByID)).then(story => res.send(story));
});

routers.get(ROUTERS.item, async (req,res) => {
    let id = +req.params.id;
    if(!id || !req.params) {
       return  res.send({data: 'ID not found'});
    }
    let storyData =  await getItemByID(id);
    let comments =  await getItems(storyData?.kids ?? [],getItemByID);

    res.send({story: storyData, comments});
})

export default routers;
