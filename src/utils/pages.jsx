export const getPageCount = (totalCountPosts, limit) =>
    Math.ceil(totalCountPosts / limit);

export const getPagesArr = (totalPages) => {
    const result = [];

    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }

    return result;
};
