import ghpages from 'gh-pages';

ghpages.publish('dist', (err) => {
  console.error(err);
  process.exit(1);
});
