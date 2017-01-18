import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	  console.log("Hiiteed");
      return this.store.findAll('user');
    },
    actions: {
	  delete(post) {
	  	post.destroyRecord(post);
	  	this.transitionTo('users.index');
	  }
	}

});
