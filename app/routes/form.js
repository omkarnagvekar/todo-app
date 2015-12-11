import Ember from 'ember';

export default Ember.Route.extend({
	//controlerName: 'brands',
	model() {

    // return "Detail form model";
    return this.store.findRecord('detail');

		// return Ember.RSVP.hash({
		// 	details: this.store.find('detail');
		// });
	},
	setupController(controller, model) {
		controller.set('formType', "Form Validation");
		controller.set('detailObj', model);
		console.log(controller.get('detailObj'));
	},
	actions: {
		checkValue() {
			var currentController = this.controllerFor('form');
			console.log(currentController.get('detailObj.inputText'));
			console.log(this.controller.get('detailObj').get('inputText'));
			alert("Action from Route called");
			//alert(controller.get('detailObj'));
		}
	}
});
