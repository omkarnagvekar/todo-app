import Ember from 'ember';
import DS from 'ember-data';
import Validator from 'npm:validator';

export default Ember.Controller.extend({
  errors: DS.Errors.create(),
  inputTextString: Ember.computed('detailObj', function() {
    var def = _.find(['hi', 'hello'], function(obj) {
      return obj == 'hello';
    });
    console.log(Validator.contains("This is beginning of validation exercise", "obj"));
    return this.get('detailObj.inputText') + def;
  }),
  watchTitle: Ember.observer('detailObj.inputText', function() {
    var detail = this.get('detailObj.inputText');
    this.set('errors', DS.Errors.create());

    if(Validator.contains(detail, ".")) {
      this.get('errors').add('title', 'Unexpected title');
      console.log(this.get('errors.title'));
    } else {
      this.get('errors').clear();
    }
    console.log("First textbox value change");
  }),
  watchEmail: function() {
    console.log("Email id: " + this.get('detailObj.emailId'));
  }.observes('detailObj.emailId'),
  watchPhone: function() {
    this.set('errors', DS.Errors.create());
    if(!Validator.isNumeric(this.get('detailObj.phone'), 'en-US')) {
      this.get('errors').add('phone', 'Phone number does not exist... Please try again');
    }
    console.log("Email id: " + this.get('detailObj.phone'));
  }.observes('detailObj.phone'),
  watchDomainUrl: Ember.observer('detailObj.url', function() {
    this.set('errors', DS.Errors.create());
    var regex = /^(https?:\/\/)?([\da-zA-Z\.-_]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    url = this.get('detailObj.url');
    if(!Validator.matches(url, regex)) {
      this.get('errors').add('url', 'Invalid url... Please correct and try again.');
      console.log("Regex validator called");
    }
    console.log("URL changed");
  }),
  actions: {
    test() {
      var check = "Hello", detail = this.get('detailObj');
      console.log(this.get('inputTextString'));
      //alert("test method called" + detail);
      console.log('test method called' + detail);
      console.log(this.get('errors.title'));
    },
    validateForm() {
      console.log("Entered new key");
    }
  }
});
