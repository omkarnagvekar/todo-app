import Ember from 'ember';
import ValidMixin from '../mixins/validations';
import DS from 'ember-data';
import Validator from 'npm:validator';

var detailFormObject = Ember.Object.extend(Ember.Validations.Mixin, {
  validations: {
    title: {
      presence: true,
      //length: { minimum: 5 }
    },
  }
});

export default Ember.Component.extend(ValidMixin, {
  errors: DS.Errors.create(),
  validationFlag: Ember.computed('errors', function() {
    console.log("errors computed property");
    console.log(this.get('errors.title'));
    // console.log(ValidMixin.mixins[0].properties.validations);
    // console.log(ValidMixin.mixins[0].properties.printMessage());
    console.log(this.get('validations'));
    this.printMessage("Hello");
    return false;
  }).property(),

  /*Computed property*/
  titleString: Ember.computed('detailObj', function() {
    var def = _.find(['hi', 'hello'], function(obj) {
      return obj == 'hello';
    });
    console.log(Validator.contains("This is beginning of validation exercise", "obj"));
    return this.get('detailObj.title') + def;
  }),

  clearErrorsObject(fieldName) {
    if(this.get('errors').has(fieldName))
      this.get('errors').remove(fieldName);
  },

  setSubmitFlag() {
    if(this.get('errors').has('title'))
      this.set('submitFlag', true);
    else
      this.set('submitFlag', false);
  },

  actions: {
    test() {
      var detail = detailFormObject.create();
      console.log(detail);
      detail.validate().then(null, function() {
        console.log(detail.get('isValid'));
        console.log(detail.get('errors.title'));
      });
    },
    /*Title validation*/
    validateTitle() {
      var title = this.get('detailObj.title'), titleValidations = this.get('validations.title');
      /*Clear errors object*/
      this.clearErrorsObject('title');

      /*Perform Validations*/
      if(Validator.isNull(title))
        this.get('errors').add('title', this.getErrorMessage('title', 'presence'));
      if(title.length > 0 && title.length < 5)
        this.get('errors').add('title', this.getErrorMessage('title', 'minlength'));
      if(title.length > 20)
        this.get('errors').add('title', this.getErrorMessage('title', 'maxlength'));

      /*Enable/disable Submit flag*/
      this.setSubmitFlag();
    },
    validateEmail() {
      var emailRegex = /^[a-zA-Z0-9!#$%&\'*+\\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var simpleEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      var testRegex = /^[-0-9A-Za-z!#$%&'*+/=?^_`{|}~.]+@[-0-9A-Za-z!#$%&'*+/=?^_`{|}~.]+\.[A-Za-z]+/;
      if(this.get('errors').has('email'))
        this.get('errors').remove('email');

      if(Validator.isNull('detailObj.email'))
        this.get('errors').add('email', 'value is null');
      if(Validator.isFullWidth('detailObj.email'))
        this.get('errors').add('email', 'value is empty');
      if(!Validator.matches(this.get('detailObj.email'), testRegex))
        this.get('errors').add('email', 'Invalid Email id... Please re-enter a correct value');

      console.log("ACTION validate Email");
      console.log(Validator.matches(this.get('detailObj.email'), regex));
    },
    validateUrl() {
      if(this.get('errors').has('url'))
        this.get('errors').remove('url');

      var regex = /^(https?:\/\/)?([\da-zA-Z\.-_]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      url = this.get('detailObj.url');
      if(!Validator.matches(url, regex)) {
        this.get('errors').add('url', 'Invalid url... Please correct and try again.');
        console.log("Regex validator called");
      }
    }
  }

});
