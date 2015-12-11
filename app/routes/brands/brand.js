import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(transition) {
		console.log(transition);
	},
	model(params) {
		console.log(params);
		
		return params;
	},
	setupController(controller, model) {
		console.log(model);
		var carBrands = [
			{brandId: 1, variants: [{variant_id: 1, name: "City"},
						{variant_id: 2, name: "Jazz"},
						{variant_id: 3, name: "CR-V"},
						{variant_id: 4, name: "Accord"}]
			},{brandId: 2, variants: [{variant_id: 1, name: "Altis"},
						{variant_id: 2, name: "Innova"},
						{variant_id: 3, name: "Camry"},
						{variant_id: 4, name: "Etios"}]
			},{brandId: 3, variants: [{variant_id: 1, name: "i20"},
						{variant_id: 2, name: "Creta"},
						{variant_id: 3, name: "Verna"},
						{variant_id: 4, name: "i10"}]
			},{brandId: 4, variants: [{variant_id: 1, name: "A4"},
						{variant_id: 2, name: "A8"},
						{variant_id: 3, name: "Q5"},
						{variant_id: 4, name: "Q6"}]
			},{brandId: 5, variants: [{variant_id: 1, name: "WagonR"},
						{variant_id: 2, name: "Swift"},
						{variant_id: 3, name: "S-Cross"}]
			}
		];
		var selectedBrand = _.find(carBrands, function(brand) {
			return brand.brandId == model.brand_id;
		});
		console.log(selectedBrand);

		controller.set('variantsList', selectedBrand.variants);
		console.log(controller.get('variantsList'));
		controller.set('testMessage', "Hello people");
	}
});