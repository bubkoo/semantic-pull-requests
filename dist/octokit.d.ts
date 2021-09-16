export declare namespace Octokit {
    function get(): import("@octokit/core").Octokit & import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & {
        paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
    };
}
export declare type Octokit = ReturnType<typeof Octokit.get>;
