const path = require(`path`);

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    const component = path.resolve(`src/template.js`);

    createPage({
        path: '/',
        component,
        context: {
            title: `My random title - ${Math.random()}`
        },
    });
};