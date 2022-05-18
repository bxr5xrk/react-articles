import { useMemo } from "react";

// sort posts
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);

    return sortedPosts;
};

// search in sorted posts
export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(search) ||
                post.body.toLowerCase().includes(search)
        );
    }, [search, sortedPosts]);

    return sortedAndSearchedPosts;
};
