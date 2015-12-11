import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('detail');
  },
  setupController(controller, model) {
    this.set('validationModel', model);
  }
});
