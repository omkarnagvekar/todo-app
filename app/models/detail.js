import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  emailId: DS.attr('string'),
  phone: DS.attr('string'),
  url: DS.attr('string')
});
