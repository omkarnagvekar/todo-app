import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('detail');
  },
  setupController(controller, model) {
    controller.set('validationModel', model);
  }
});
