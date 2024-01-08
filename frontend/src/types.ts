export interface Story {
    by?: string;
    descendants?: number;
    id: number;
    kids?: number[];
    score?: number;
    time: number;
    title?: string;
    type: 'story' | 'comment';
    url?: string;
    parent?: number;
    deleted?: boolean;
    text?: string;
    dead?: boolean;
    color: string,
}
export type ActiveStory = {
    story: Story,
    comments: Story[],
}
export interface IState {
    stories: Story[] | [],
    activeStory: ActiveStory | {
        story: {},
        comments: []
    },
    answers: Story[] | [],
    isError: boolean,
    isLoad: boolean,
    avatars?: {
        [key: string]: string,
    }
}

export type TAction = {data: any, type: string};
