import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
	  console.log(params);
      return this.store.find('post',params.post_id);
    }
});