export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e3085f6666cd7439169f038',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qbdhzfey',
                  apiId: 'cf005ca9-88e5-410f-94df-d02620a98e2b'
                },
                {
                  buildHookId: '5e3085f6b956f6432e627cbc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q64a74zi',
                  apiId: '1b5b4dd6-b5ba-4c2c-ac06-d65cf5c06527'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GAsdeX/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q64a74zi.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
