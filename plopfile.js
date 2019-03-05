const SEGMENT_PATH = "app"

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
            path: `${SEGMENT_PATH}/{{camelCase name}}/index.html`,
            templateFile: 'plop-templates/index-template.html'
        }, {
            // style.css
            type: 'add',
            path: `${SEGMENT_PATH}/{{camelCase name}}/style.scss`,
            templateFile: 'plop-templates/style-template.scss'
        }, {
            // main.js
            type: 'add',
            path: `${SEGMENT_PATH}/{{camelCase name}}/main.js`,
            templateFile: 'plop-templates/main-template.js'
        }]
    });
};
