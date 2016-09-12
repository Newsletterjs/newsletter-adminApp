import Ember from 'ember';

export default Ember.Controller.extend({
  record: function() {
    return this.store.createRecord('newsletter');
  }.property(),
  actions: {
    create () {
      console.log('this', this.get('record') );

      this.get('record')
      .save().then((r) => {
        this.transitionToRoute('newsletter.item', r.id);
      });
    }
  }
});
