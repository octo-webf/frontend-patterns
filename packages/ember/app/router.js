import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/'}, function() {
    this.route('home')
    this.route('simple-list');
  })
  this.route('credits');
});

export default Router;
