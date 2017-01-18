import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
	  save() {
	      const newPost = this.store.createRecord('user', this.currentModel);
	      newPost.save().then((post) => {
	        this.transitionTo('users.show', post);
	      });	
	    },
	    cancel() {
	      this.transitionTo('posts.new');
	    }
	}
});
