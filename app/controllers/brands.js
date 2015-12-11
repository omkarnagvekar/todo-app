import Ember from 'ember';

export default Ember.Controller.extend({
	isDefined: true,
	mockStr: "Controller String Property",
	testModel: {id:1, type: "sedan", name: "Honda City"},
	actions: {
		setStoreData: function() {
			var store = this.store;
			console.log(store.get('brands'));
		},
		getJsonData: function() {
			var mockData;
			$.getJSON("test.json").done(function(data) {
				mockData = data;
				console.log(mockData);
			});
		}
	},
	//brandsList: function() {}.property('model')
});