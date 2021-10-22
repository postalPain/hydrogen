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
      header: 'Sign up',
      header2: 'Create Password',
      fields: {
        name: 'First Name',
        lastName: 'Last Name',
        phone: 'Mobile',
        email: 'Email',
        password: 'Password',
        passwordPlaceholder: '8 letters, 1 capital, 1 number',
        confirmPassword: 'Confirm Password',
        confirmPasswordPlaceholder: 'Type password',
      },
      errors: {
        name: 'Please enter your first name',
        lastName: 'Please enter your last name',
        phone: 'Please enter a mobile number',
        email: 'Please enter an email',
        email2: 'Please check your email address and try again',
        password: 'Please enter a password',
        password2: 'Password must be at least 8 characters and have one upper case letter and one number',
        confirmPassword: 'Passwords do not match. Please try again.',
      },
      button: 'Next',
      button2: 'Confirm',
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
    login: {
      header: 'Login',
      email: 'Email Address',
      password: 'Password',
      forgotPassword: 'Forgot Password?',
      button: 'Log In',
    },
    orderConfirmation: {
      header: 'Order Confirmation',
      success: 'Success!',
      p1: 'Your order has been confirmed.',
      p2: 'You will receive your products shortly!',
      time1: 'Your order will be delivered in',
      time2: ' 15 mins.',
      summary: 'Order Summary',
      date: 'Order date',
      address: 'Delivery address',
      instructions: 'Delivery instructions',
      cartTotal: 'Cart totals',
      subtotal: 'Subtotal',
      fee: 'Delivery fees',
      vat: 'VAT',
      total: 'Total',
      details: 'Order details',
      button: 'Browse Products',
    },
    resetPassword: {
      header: 'Reset Password',
      title: 'Reset password',
      description: 'Enter the email associated with your account and we’ll send an email with instructions to reset your password in no time!',
      email: 'Email',
      button: 'Send instructions',
    },
    checkEmail: {
      title: 'Check your email',
      description: 'We have sent password recovery',
      description2: 'instructions to your email.',
      button: 'Open email app',
      bottomText: 'Didn’t receive our email? Please check your spam,',
      bottomText2: 'or',
      link: 'try another email address',
    },
    updatePassword: {
      header: 'Create Password',
      title: 'Create new password',
      description: 'Your new password must be different from',
      description2: 'previously used passwords.',
      password: 'New password',
      confirmPassword: 'Confirm password',
      button: 'Reset password',
    },
    resetPasswordSuccess: {
      header: 'Reset Password',
      title: 'Success!',
      description: 'You have successfully reset',
      description2: 'your password!',
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
      addItem: 'Add item',
    },
    basketSlideUp: {
      header: 'My shopping cart',
      emptyList: 'Nothing in your cart yet!',
      pieces: 'pieces',
      items: 'items',
      deliveryFee: 'delivery fee',
      checkout: 'Checkout',
      exploreButton: 'Explore products',
    },
    drawerContent: {
      title: 'Don’t have an account yet?',
      description: 'Create your account now and enjoy your first oder with a promo code',
      orders: 'My orders',
      faq: 'FAQ',
      about: 'Get to know us',
      contact: 'Get in touch',
      delivery: 'Delivery',
      terms: 'Terms & Privacy',
      logout: 'Log Out',
    },
  },
};
