import {Story} from "../types";

export const checkAnswers = (answers:Story[],newAnswers: Story[]) => {

    if (answers.length > 0) {
        for(let i = 0; i <= newAnswers.length - 1; i++) {
            if(!answers.find(el => el.id === newAnswers[i].id)){
                answers =  answers.concat(newAnswers[i]);
            }
        }
    }
    else {

       answers = answers.concat(newAnswers);
    }

    return answers;
}
