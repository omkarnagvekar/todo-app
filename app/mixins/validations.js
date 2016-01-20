import Ember from 'ember';

var defaults = {
  inclusion: "is not included in the list",
  exclusion: "is reserved",
  invalid: "is invalid",
  confirmation: "doesn't match {{attribute}}",
  accepted: "must be accepted",
  empty: "can't be empty",
  blank: "can't be blank",
  present: "must be blank",
  tooLong: "is too long (maximum is {{count}} characters)",
  tooShort: "is too short (minimum is {{count}} characters)",
  wrongLength: "is the wrong length (should be {{count}} characters)",
  notANumber: "is not a number",
  notAnInteger: "must be an integer",
  greaterThan: "must be greater than {{count}}",
  greaterThanOrEqualTo: "must be greater than or equal to {{count}}",
  equalTo: "must be equal to {{count}}",
  lessThan: "must be less than {{count}}",
  lessThanOrEqualTo: "must be less than or equal to {{count}}",
  otherThan: "must be other than {{count}}",
  odd: "must be odd",
  even: "must be even",
  defaultRemoteValidation: "failed remote validation",
  uniqueness: "has already been taken",
  url: "is not a valid URL"
};

export default Ember.Mixin.create({
  validations: {
    title: {
      presence: {
        flag: true,
        message: defaults.empty
      },
      minlength: {
        length: 5,
        message: defaults.tooShort
      },
      maxlength: {
        length: 20,
        message: defaults.tooLong
      }
    },
    email: {
      presence: true
    },
    phone: {
      numericality: true
    },
    url: {
      presence: true
    }
  },
  getErrorMessage: function (fieldName, validationType) {
    return this.get("validations")[fieldName][validationType].message;
  },
  printMessage: function (str) {
    console.log("Print function message printed: " + str);
    console.log(typeof defaults.tooShort);
  }
});
