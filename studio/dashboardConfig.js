export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615f0ca47fd6f33216b13257',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gy6s84rs',
                  apiId: '7d8157db-3835-44fe-bfed-fab46039c429'
                },
                {
                  buildHookId: '615f0ca43aad183db1db0056',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q7r8mqvi',
                  apiId: '9910bcd7-8df6-4aaa-a34c-6b81f67c1371'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andybir/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-q7r8mqvi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
