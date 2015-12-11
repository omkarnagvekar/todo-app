import Ember from 'ember';

export default Ember.Controller.extend({
	isNotDefined: true,
	mockStr: "Controller (brand) String Property",
	testModel: {id:1, brand: "Honda", name: "Jazz"},
	actions: {
		getJsonData: function() {
			var mockData;
			$.getJSON("test.json").done(function(data) {
				mockData = data;
				console.log(mockData);
			});
		}
	},
	//variantsList: function() {}.property('model')
});