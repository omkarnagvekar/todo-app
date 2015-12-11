import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.get('detail');
    return this.store.findRecord('detail');
  },
  setupController(controller, model) {
    controller.set('formDetail', model);
  }
});
