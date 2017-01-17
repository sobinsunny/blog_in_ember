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
    save: function(event, editor) {
      console.log("Content Changed");
      console.log(event);
      console.log(editor);
    },
    cancel() {
      this.transitionTo('posts.new');
    }
  }
});
