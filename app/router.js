import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.resource('brands', function() {
      this.route('brand', {path: '/:brand_id' });
  });
  /*this.resource('brand', { path: '/brands/:brand_id' }, function() {
      this.resource('variant');
      this.resource('variant', { path: '/variant/:variant_id' });
  });*/
  /*this.resource('list', function() {
      this.resource('brand', { path: '/:brand_id' }, function() {
          this.resource('variant');
          this.resource('variant', { path: '/variant/:variant_id' });
      });
  });*/
  this.route('posts', {path: '/posts/:post_id'});
  //this.route('form', {path: '/form'});
  this.route('validations', {path: '/validations'});
  this.route('framework');
});

export default Router;
