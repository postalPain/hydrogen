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
      helloMessage: 'Hey there!',
      helloUserMessage: 'Hey %{name}!',
      openHours: 'We’re open 08:00 - 23:00',
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
      header: 'Pin your location',
      search: 'Search',
      button: 'Confirm Address',
      message1: 'Sorry, we do not deliver to this area',
      message2: 'We are working hard to add more delivery areas very soon!',
    },
    confirmAddress: {
      header: 'Additional Details',
      errors: {
        addressType: 'Please choose an address type',
        floor: 'Please specify your floor',
        apartment: 'Please specify an apartment number',
        house: 'Please specify a house number',
      },
      button: 'Save address',
    },
    checkout: {
      addressLabel: 'Delivery address',
      instructionsLabel: 'Delivery instructions',
      deliveryDetails: 'Delivery Details',
      couponPlaceholder: 'Enter promo code',
      couponButton: 'Apply',
      cartTotal: 'Cart totals',
      subtotal: 'Subtotal',
      fee: 'Delivery fees',
      vat: 'VAT',
      total: 'Total',
      submit: 'Place Order',
    },
    onboard: {
      title: 'Welcome!',
      button: 'Continue',
      link: 'I already have an account',
    },
  },
  components: {
    locationButton: {
      defaultLocation: 'Location delivery is not specified',
    },
    categoriesViewer: {
      emptyList: 'Categories list is empty',
    },
    subcategoryTab: {
      emptyList: 'Subcategory does not have any product',
      loading: 'Subcategory products are loading',
    },
    productItem: {
      more: 'More info',
      backSoon: 'Back soon',
    },
    paymentMethod: {
      title: 'Payment Method',
      addCard: 'Add new card',
      changeButton: 'Change',
    },
    categoriesTabNavigation: {
      emptyList: 'Categories are not defined',
      loading: 'Categories are loading',
    },
    paymentCardForm: {
      title: 'Pay AED %{price} using',
      fields: {
        card: 'Card number',
        date: 'Expiry date',
        datePlaceholder: 'MM/YY',
        cvc: 'CVV/CVC',
        cvcPlaceholder: 'CVC',
        save: 'Save card for future Blitz payments',
      },
      errors: {
        card: 'Please check card number',
        date: 'Please check expiry date',
        cvc: 'Please check CVV/CVC',
        cardRequired: 'Card number is required',
        dateRequired: 'Expiry date is required',
        cvcRequired: 'CVV/CVC is required',
      },
      button: 'Add Card',
    },
    changePaymentMethod: {
      title: 'Payment method',
      changeCard: 'Use an existing card',
      addCard: 'Add a new card',
    },
    cardVariant: {
      title: 'Your Cards',
      cardTitle: 'Card Number',
    },
    productSlideUp: {
      origin: 'Origin',
      price: 'Price',
      itemAdded: 'Added to cart',
      pieces: 'pieces',
    },
    addProductButton: {
      addItem: 'Add item',
    },
  },
};
