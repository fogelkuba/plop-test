const PATH = "app/modules/"

module.exports = (plop) => {

    plop.setGenerator("Segment", {

        description: 'Create new segment',

        // Get input from user
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter name for new segment:'
        }],

        // List of actions to be executed
        actions: [{
            // index.html
            type: 'add',
            path: `${PATH}/index.html`,
            templateFile: 'plop-templates/module.js'
        }, {
            // style.css
            type: 'add',
            path: `${PATH}/{{camelCase name}}.js`,
            templateFile: 'plop-templates/style.scss'
        }, {
            // main.js
            type: 'add',
            path: `${PATH}/{{camelCase name}}.js`,
            templateFile: 'plop-templates/main.js'
        }]
    });
};
