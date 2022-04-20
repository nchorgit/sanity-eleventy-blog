export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '626069a7f370ae2441fc2b55',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-h4cbk93y',
                  apiId: '54197c29-e9e8-4323-80ed-dc9338634181'
                },
                {
                  buildHookId: '626069a8dcc9ce26e1cd73ef',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-22fj1uah',
                  apiId: 'ee9c8c3f-5c31-4c67-8615-a80c8f06b015'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nchorgit/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-22fj1uah.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
