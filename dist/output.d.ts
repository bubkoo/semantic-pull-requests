import { Status } from './status';
export declare namespace Output {
    function get(state: Status.State): {
        title: string;
        summary: string;
        text?: string | undefined;
    };
}
