import {Story} from "../types";

export const sortStories = (stories: Story[]): Story[] => {
    return stories.sort((s1, s2) => s2.time - s1.time);
}
