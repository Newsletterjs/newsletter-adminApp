import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('emailtemplate', function(){
    this.route('create');
    this.route('item', { path: ':id' }, function(){
      this.route('edit');
    });
  });
  this.route('newsletter', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function() {
      this.route('edit');
    });
  });
});

export default Router;
