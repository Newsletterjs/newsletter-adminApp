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
      this.transitionToRoute('emailtemplate.item', record);
    },
    editRecord: function (record) {
      this.transitionToRoute('emailtemplate.item.edit', record);
    },
    deleteRecord: function (record) {
      if (confirm('Are you sure, you want delete this content?')) {
        record.destroyRecord();
      }
    }
  }
});