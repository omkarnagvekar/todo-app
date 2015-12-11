import DS from 'ember-data';

export default DS.Model.extend({
	brandId: DS.attr('string'),
	name: DS.attr('string')
});