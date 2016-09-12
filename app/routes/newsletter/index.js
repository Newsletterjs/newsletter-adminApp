import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      records: this.store.query('newsletter', {
        order: 'id ASC'
      })
    });
  }
});
