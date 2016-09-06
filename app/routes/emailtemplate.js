import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      emailtemplates: this.store.query('emailtemplate', {
        order: 'id ASC'
      })
    });
  }
});
