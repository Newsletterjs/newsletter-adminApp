import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    {
      "propertyName": "name",
      "title": "Name"
    },
    {
      "propertyName": "description",
      "title": "Description"
    },
    {
      "title": "Actions",
      "template": "emailtemplate/table/actions"
    }
  ],
  actions: {
    viewRecord: function (record) {
      this.transitionToRoute('newsletter.item', record.id);
    },
    editRecord: function (record) {
      this.transitionToRoute('newsletter.item.edit', record.id);
    },
    deleteRecord: function (record) {
      if (confirm('Are you sure, you want delete this newsletter?')) {
        record.destroyRecord();
      }
    }
  }
});