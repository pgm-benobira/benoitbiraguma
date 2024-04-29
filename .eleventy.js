module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("input/assets");
    return {
        dir: {
            input: "input",
            output: "output",
        }
    };
};