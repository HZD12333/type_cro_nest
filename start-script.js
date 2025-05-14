const shell = require('shelljs');

const config = plop => {
    plop.setDefaultInclude({ generators: true });
    plop.setGenerator('start', {
        description: '运行项目',
        prompts: [
            {
                type: 'rawlist',
                name: 'project',
                message: '项目',
                choices: [
                    { name: 'client', value: 'client' },
                    { name: 'server', value: 'server' },
                ],
            },
            // {
            //     type: 'rawlist',
            //     name: 'env',
            //     message: '环境',
            //     choices: [
            //         { name: 'uat01', value: 'uat01' },
            //         { name: 'uat02', value: 'uat02' },
            //     ],
            //     when: answers => answers.project === 'server'
            // },
        ],
        actions: [
            function start(params) {
                if (params.project === 'client') {
                    shell.exec(`pnpm -F font dev`, { async: true });
                } else if (params.project === 'server') {
                    shell.exec(`pnpm --filter server start:dev`, { async: true });
                }
            },
        ],
    });
};


module.exports = config;
