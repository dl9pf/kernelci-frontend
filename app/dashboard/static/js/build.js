({
    appDir: '../',
    baseUrl: 'js',
    dir: '/tmp/assets-build',
    allowSourceOverwrites: true,
    paths: {
        'lib': './lib',
        'app': './app',
        'charts': './app/charts',
        'utils': './app/utils',
        'compare': './app/compare',
        'tables': './app/tables',
        'buttons': './app/buttons',
        'components': './app/components',
        'sprintf': 'lib/sprintf-1.0.3',
        'URI': 'lib/URI-1.17.0',
        'punycode': 'lib/punycode-1.17.0',
        'IPv6': 'lib/IPv6-1.17.0',
        'SecondLevelDomains': 'lib/SecondLevelDomains-1.17.0',
        'datatables.bootstrap': 'empty:',
        'datatables.net': 'empty:',
        'jquery': 'empty:',
        'bootstrap': 'empty:',
        'd3': 'empty:',
        'jquery.hotkeys': 'empty:',
        'jquery.hotkeymap': 'empty:'
    },
    map: {
        '*': {
            'app/view-boots-all': 'app/view-boots-all.2016.2.1',
            'app/view-boots-all-job': 'app/view-boots-all-job.2016.2.1',
            'app/view-boots-all-job-kernel-defconfig': 'app/view-boots-all-job-kernel-defconfig.2016.2.1',
            'app/view-boots-all-lab': 'app/view-boots-all-lab.2016.2.1',
            'app/view-boots-board': 'app/view-boots-board.2016.2.1',
            'app/view-boots-board-job': 'app/view-boots-board-job.2016.2.1',
            'app/view-boots-board-job-kernel': 'app/view-boots-board-job-kernel.2016.2.1',
            'app/view-boots-board-job-kernel-defconfig': 'app/view-boots-board-job-kernel-defconfig.2016.2.1',
            'app/view-boots-id': 'app/view-boots-id.2016.2.1',
            'app/view-boots-job-kernel': 'app/view-boots-job-kernel.2016.2.1',
            'app/view-builds-all': 'app/view-builds-all.2016.2.1',
            'app/view-builds-job-kernel': 'app/view-builds-job-kernel.2016.2.1',
            'app/view-builds-job-kernel-defconfig': 'app/view-builds-job-kernel-defconfig.2016.2.1',
            'app/view-builds-job-kernel-defconfig-logs': 'app/view-builds-job-kernel-defconfig-logs.2016.2.1',
            'app/view-compare': 'app/view-compare.2016.2.1',
            'app/view-index': 'app/view-index.2016.2.1',
            'app/view-info-faq': 'app/view-info-faq.2016.2.1',
            'app/view-job-compare': 'app/view-job-compare.2016.2.1',
            'app/view-jobs-all': 'app/view-jobs-all.2016.2.1',
            'app/view-jobs-job': 'app/view-jobs-job.2016.2.1',
            'app/view-jobs-job-branch': 'app/view-jobs-job-branch.2016.2.1',
            'app/view-socs-all': 'app/view-socs-all.2016.2.1',
            'app/view-socs-soc': 'app/view-socs-soc.2016.2.1',
            'app/view-socs-soc-job': 'app/view-socs-soc-job.2016.2.1',
            'app/view-socs-soc-job-kernel': 'app/view-socs-soc-job-kernel.2016.2.1',
            'app/view-sponsors': 'app/view-sponsors.2016.2.1',
            'app/view-stats': 'app/view-stats.2016.2.1'
        }
    },
    shim: {
        'datatables.bootstrap': {
            deps: ['datatables.net']
        },
        'jquery.hotkeys': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'jquery.hotkeymap': {
            deps: ['jquery.hotkeys']
        }
    },
    modules: [
        {name: 'app/view-boots-all-job-kernel-defconfig.2016.2.1'},
        {name: 'app/view-boots-all-job.2016.2.1'},
        {name: 'app/view-boots-all-lab.2016.2.1'},
        {name: 'app/view-boots-all.2016.2.1'},
        {name: 'app/view-boots-board-job-kernel-defconfig.2016.2.1'},
        {name: 'app/view-boots-board-job-kernel.2016.2.1'},
        {name: 'app/view-boots-board-job.2016.2.1'},
        {name: 'app/view-boots-board.2016.2.1'},
        {name: 'app/view-boots-id.2016.2.1'},
        {name: 'app/view-boots-job-kernel.2016.2.1'},
        {name: 'app/view-builds-all.2016.2.1'},
        {name: 'app/view-builds-job-kernel-defconfig-logs.2016.2.1'},
        {name: 'app/view-builds-job-kernel-defconfig.2016.2.1'},
        {name: 'app/view-builds-job-kernel.2016.2.1'},
        {name: 'app/view-compare.2016.2.1'},
        {name: 'app/view-index.2016.2.1'},
        {name: 'app/view-info-faq.2016.2.1'},
        {name: 'app/view-job-compare.2016.2.1'},
        {name: 'app/view-jobs-all.2016.2.1'},
        {name: 'app/view-jobs-job-branch.2016.2.1'},
        {name: 'app/view-jobs-job.2016.2.1'},
        {name: 'app/view-socs-all.2016.2.1'},
        {name: 'app/view-socs-soc.2016.2.1'},
        {name: 'app/view-socs-soc-job.2016.2.1'},
        {name: 'app/view-socs-soc-job-kernel.2016.2.1'},
        {name: 'app/view-sponsors.2016.2.1'},
        {name: 'app/view-stats.2016.2.1'},
        {name: 'kci-boots-all'},
        {name: 'kci-boots-all-job'},
        {name: 'kci-boots-all-job-kernel-defconfig'},
        {name: 'kci-boots-all-lab'},
        {name: 'kci-boots-board'},
        {name: 'kci-boots-board-job'},
        {name: 'kci-boots-board-job-kernel'},
        {name: 'kci-boots-board-job-kernel-defconfig'},
        {name: 'kci-boots-id'},
        {name: 'kci-boots-job-kernel'},
        {name: 'kci-builds-all'},
        {name: 'kci-builds-job-kernel'},
        {name: 'kci-builds-job-kernel-defconfig'},
        {name: 'kci-compare'},
        {name: 'kci-index'},
        {name: 'kci-info-faq'},
        {name: 'kci-job-compare'},
        {name: 'kci-jobs-all'},
        {name: 'kci-jobs-job'},
        {name: 'kci-jobs-job-branch'},
        {name: 'kci-socs-all'},
        {name: 'kci-socs-soc'},
        {name: 'kci-socs-soc-job'},
        {name: 'kci-socs-soc-job-kernel'}
    ]
})
