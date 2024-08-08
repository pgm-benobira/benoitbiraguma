module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("input/assets");
    eleventyConfig.addFilter("sortByOrder", (list) => {
        return list.sort((a, b) => b.data.order - a.data.order);
    })
    return {
        dir: {
            input: "input",
            output: "output",
        }
    };
};