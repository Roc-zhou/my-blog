export default [{
  path: '*',
  name: '404',
  component: () =>
    import('./404'),
}, {
    path: '/',
    name: 'home',
    component: () =>
      import('./home'),
}]
