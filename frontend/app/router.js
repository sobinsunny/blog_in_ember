import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('posts.index', {path: 'posts' });
  this.route('posts.show', { path: 'posts/:post_id' });
});

export default Router;
