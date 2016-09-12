import Ember from 'ember';

export default Ember.Controller.extend({
  emailtemplate: function() {
    return this.store.createRecord('emailtemplate');
  }.property(),
  actions: {
    create () {
      console.log('this', this.get('emailtemplate') );

      this.get('emailtemplate')
      .save().then((r) => {
        this.transitionToRoute('emailtemplate.item', r);
      });
    }
  }
});
