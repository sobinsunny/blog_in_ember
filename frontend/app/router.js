import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users.index', {path: 'users' });
  this.route('users.show', { path: 'users/:user_id' });
  this.route('users.new',{ path: 'users/new' });
  
  this.route('posts.index', {path: 'posts' });
  this.route('posts.show', { path: 'posts/:post_id' });
  this.route('posts.new',{ path: 'posts/new' });
});

export default Router;