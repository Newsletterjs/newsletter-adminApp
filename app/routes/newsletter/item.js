import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      record: this.store.findRecord('newsletter', params.id)
    });
  }
});
