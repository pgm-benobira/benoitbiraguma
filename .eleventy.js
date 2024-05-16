module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("input/assets");
    eleventyConfig.addFilter("sortByOrder", (list) => {
        return list.sort((a, b) => a.data.order - b.data.order);
    })
    return {
        dir: {
            input: "input",
            output: "output",
        }
    };
};