import {Story} from "../types";

export const createAnswers = (comments: Story[],cal: any) => {
    if (comments) {
        for (let i = 0; i <= comments.length; i++) {
            if (comments[i].kids && (comments[i].kids as number[]).length > 0) {
                let kids = (comments[i].kids as number[]);
                for (let j = 0; j < kids.length; j++) {
                    kids[j] = cal(kids[j]);
                }
            }
        }
    }

    return comments;
}
