const { resolve, join } = require('path')

module.exports = {
    base: '/athos/',
    dest: resolve('docs/dist'),
    extraWatchFiles: [
        resolve('examples')
    ],
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: './examples'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'Avoris Travel',
            description: 'Vue componentes for Avoris Travel Apps'
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Avoris Travel',
            description: 'Componentes de Vue para las aplicaciones de Avoris Travel'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname),
                '@lib': resolve('src'),
                '@components': resolve('src/components'),
                '@layouts': resolve('src/layouts'),
                '@pages': resolve('src/pages'),
                '@utils': resolve('src/utils'),
                '@store': resolve('src/store'),
                '@mixins': resolve('src/mixins'),
                '@directives': resolve('src/directives'),
                '@scss': resolve('src/scss')
            }
        }
    },
    scss: {
        sassOptions: {
            includePaths: [join(__dirname, '../../src/scss')]
        },
        prependData: '@import "core/core";'
    },
    themeConfig: {
        logo: '/assets/img/avoris.svg',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                }
            },
            '/es/': {
                selectText: 'Idiomas',
                label: 'Español',
                ariaLabel: 'Idiomas',
                editLinkText: 'Editar esta página en GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'Hay disponible nuevo contenido.',
                        buttonText: 'Actualizar'
                    }
                },
                nav: [
                    {
                        text: 'Inicio',
                        link: '/es/'
                    },
                    {
                        text: 'Documentación',
                        link: '/es/documentacion/'
                    },
                    {
                        text: 'Desarrollo',
                        link: '/es/desarrollo/'
                    }
                ],
                sidebar: {
                    '/es/documentacion/': [
                        {
                            title: 'Empezando',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/'
                            ]
                        },
                        {
                            title: 'Componentes',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/components/banner',
                                '/es/documentacion/components/bannerSirius',
                                '/es/documentacion/components/button',
                                '/es/documentacion/components/icon',
                                '/es/documentacion/components/iconList',
                                '/es/documentacion/components/paragraph',
                                '/es/documentacion/components/picture',
                                '/es/documentacion/components/price',
                                '/es/documentacion/components/priceButton'
                            ]
                        }
                    ],
                    '/es/desarrollo/': [
                        {
                            title: 'Empezando',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/desarrollo/',
                                '/es/desarrollo/crear-un-componente',
                                '/es/desarrollo/documentar-un-componente'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
