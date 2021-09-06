export default {
  errors: {
    something_went_wrong: 'Something went wrong.',
    appear_offline: 'You appear to be offline',
    authentication_issues: 'There was an issue with your authorization',
    bad_request: "We are unable to find what you're looking for",
    services_unavailable: 'Sorry, our service is temporarily not available.',
    unauthenticated: 'Unauthenticated',
  },
  alerts: {
    title: 'App',
    buttons: {
      ok: 'Ok',
      cancel: 'Cancel',
      proceedToSettings: 'Proceed to settings',
    },
    messages: {
      locationPermissionRequestFailed: 'Geolocation permissions are not granted, application functionality will be restricted',
      locationPermissionsAreNotGranted: 'Geolocation permissions are not granted, pleas check the Settings',
    },
  },
  notifications: {
    saved_successfully: 'Saved successfully',
    saved_partially: 'Saved partially',
  },
  validationErrors: {
  },
  authentication: {
    log_in: {
      successful: "You're successfully logged in",
    },
    log_out: {
      successful: "You're successfully logged out",
    },
    sign_up: {
    },
    forgot_password: {
      successful: 'Forgot Password request send successfully',
    },
  },
  user: {},
  forms: {},
  buttons: {},
  links: {},
  inputs: {},
  modals: {},
  screens: {
    home: {
      title: 'Hey',
    },
    signUp: {
      title: 'Sign up',
      fields: {
        name: 'Full name',
        phone: 'Mobile',
        email: 'Email',
        password: 'Password',
      },
      errors: {
        name: 'Please enter your full name',
        phone: 'Please enter a mobile number',
        email: 'Please enter an email',
        email2: 'Please check your email address and try again',
        password: 'Please enter a password',
        password2: 'Password should contain at least 8 symbols',
      },
      button: 'Continue to checkout',
    },
    map: {
      search: 'Search',
      button: 'Confirm Address',
      message1: 'Sorry, we do not deliver to this area',
      message2: 'We are working hard to add more delivery areas very soon!',
    },
  },
};
