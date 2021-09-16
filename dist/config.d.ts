export interface Config {
    locations: Config.Location[];
    terms: string[];
}
export declare namespace Config {
    type Location = 'title' | 'label' | 'commit';
    const defaults: Config;
    function get(): Promise<{
        configs: Config[];
        manual: boolean;
    }>;
}
