require('dotenv').config();

async function fetchGraphicDesignProjects() {
    const query = `{
        graphicDesignProjects(orderBy: order_DESC, first: 20) {
            title
            description
            order
            variant {
                title
                rightSide
            }
            video1 {
                url
                fileName
            }
            video2 {
                url
                fileName
            }
            video3 {
                url
                fileName
            }
            video4 {
                url
                fileName
            }
            image1 {
                url
                fileName
            }
            image2 {
                url
                fileName
            }
            image3 {
                url
                fileName
            }
            image4 {
                url
                fileName
            }
        }
    }`;
    const response = await fetchAPI(query);
    return response.graphicDesignProjects;
}

async function fetchWebDevelopmentProjects() {
    const query = `{
        webDevelopmentProjects(orderBy: order_DESC, first: 20) {
            title
            description
            order
            live
            repo
            projectTag {
                title
            }
            thumbnail {
                url
                fileName
            }
        }
    }`;
    const response = await fetchAPI(query);
    
    return response.webDevelopmentProjects;
}

async function fetchAPI(query) {
    const response = await fetch(process.env.HYGRAPH_CONTENT_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return data.data;
}

module.exports = async function() {
    const graphicDesignProjects = await fetchGraphicDesignProjects();
    const webDevelopmentProjects = await fetchWebDevelopmentProjects();
    return { graphicDesignProjects, webDevelopmentProjects };
};
