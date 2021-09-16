import { Config } from './config';
export declare namespace Matcher {
    const generate: (locations: Config.Location[], terms: string[]) => (location: Config.Location, targets?: string | string[] | null | undefined) => {
        location: Config.Location;
        text: string;
        match: string;
    } | null;
}
