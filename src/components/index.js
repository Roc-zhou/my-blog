export default [{
  path: '*',
  name: '404',
  component: () =>
    import('./404'),
}, {
  path: '/',
  component: () =>
    import('./main'),
  children: [
    {
      path: '',
      name: 'home',
      component: () =>
        import('./home'),
    },
    {
      path: 'article',
      component: () =>
        import('./article'),
      children: [
        {
          path: '',
          name: 'articleList',
          component: () =>
            import('./articleList'),

        },
        {
          path: 'info/:id',
          name: 'info',
          component: () =>
            import('./articleInfo'),
        }
      ]
    },
    {
      path: 'about',
      name: 'about',
      component: () =>
        import('./about'),
    }
  ]
}]
