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
    deleteRecord: function (record) {
      record.destroyRecord();
    }
  }
});