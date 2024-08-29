const fetchData = require('./input/_data/hygraph.js');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData('webDevelopmentProjects', async () => {
        const data = await fetchData();
        return data.webDevelopmentProjects;
    });

    eleventyConfig.addGlobalData('graphicDesignProjects', async () => {
        const data = await fetchData();
        return data.graphicDesignProjects;
    });

    eleventyConfig.addGlobalData('projectTags', async () => {
        const data = await fetchData();
        return data.projectTags;
    });

    eleventyConfig.addGlobalData('designSkills', async () => {
        const data = await fetchData();
        return data.designSkills;
    });

    eleventyConfig.addPassthroughCopy("input/assets");

    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://www.benoitbiraguma.be"
        }
    });

    return {
        dir: {
            input: "input",
            output: "output",
        }
    };
};