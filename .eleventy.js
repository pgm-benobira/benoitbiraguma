const fetchData = require('./input/_data/hygraph.js');

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData('webDevelopmentProjects', async () => {
        const data = await fetchData();
        return data.webDevelopmentProjects;
    });

    eleventyConfig.addGlobalData('graphicDesignProjects', async () => {
        const data = await fetchData();
        return data.graphicDesignProjects;
    });

    eleventyConfig.addPassthroughCopy("input/assets");

    return {
        dir: {
            input: "input",
            output: "output",
        }
    };
};