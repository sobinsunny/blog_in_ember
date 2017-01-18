import Ember from 'ember';

export default Ember.Route.extend({
   model() {
    return {};
  },
  froalaEditor: {
    params: {
      toolbarInline: true,
      placeholderText: 'Enter..'
    },
  },
  actions: {
  	contentChanged: function(event, editor) {
      console.log("Content Changed");
      console.log(event);
      console.log(editor);
    },
    focus: function(event, editor) {
      console.log("Focus");
      console.log(event);
      console.log(editor);
    },
    save() {
      const newPost = this.store.createRecord('post', this.currentModel);
      newPost.save().then((post) => {
        this.transitionTo('posts.show', post);
      });
    },
    cancel() {
      this.transitionTo('posts.new');
    }
  }
});
