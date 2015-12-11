import Ember from 'ember';

export default Ember.Route.extend({
	//controlerName: 'brands',
	model() {

		var store = this.store;

		/*var brandObj = store.createRecord('brands', {
		  	brandId: '1',
		  	name: 'Honda'
		});*/
		//console.log(brandObj);
		//brand.save();
		/*this.store.push('brands', {
			id: 1,
		  	brandId: '1',
		  	name: 'Honda'
		});*/

		/*console.log(this.store.get('brands'));
		store.findRecord('brands', 1).then(function(brands) {
		  	brands.get('name');
		});*/

		var mockData = [
			{brand_id: 1, name: "Honda"},
			{brand_id: 2, name: "Toyota"},
			{brand_id: 3, name: "Hyundai"},
			{brand_id: 4, name: "Audi"},
			{brand_id: 5, name: "Suzuki"}
		];

		//return mockData;
        return this.store.findAll('brand');
	},
	setupController(controller, model) {
		controller.set('brandsList', model);
		console.log(model);
	}
});