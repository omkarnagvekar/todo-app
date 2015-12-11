import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {variant_id: 1, variant_name: "City", capacity: "1500CC", type: "sedan"};

	}
});