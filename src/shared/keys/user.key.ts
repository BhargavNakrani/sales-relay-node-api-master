export const userMessage = {
  USER_NOT_FOUND: 'User not exist',
  USER_ALREADY_EXIST: 'User already exist',
  USER_IS_DELETED: 'User is deleted',
  USER_DELETED_SUCCESS: 'User is deleted successfully',
  USER_PURCHASE_FAIL:
    'Since there were multiple failed attempts to provide 2FA code. Please try again after 10 minutes.',
  USER_EMAIL_EXIST: 'User already exist with this email',
  USER_MOBILE_EXIST: 'User already exist with this phone number',
  VALIDATION_FAILED: 'User validation failed',
  TRITON_STATUS_UPDATED: 'Triton status updated',
};

export const sessionMessage = {
  SESSION_NOT_FOUND: 'Session not found',
  SESSION_IS_DELETED: 'Session is deleted',
};

export const templateMssages = {
  TEMPLATE_NOT_FOUND: 'Template not found',
  TEMPLATE_IS_DELETED: 'Template is deleted',
  TEMPLATE_TYPE_EXIST: 'Template already exist with entered type',
  TEMPLATE_TYPE_IS_NOT_DEMO: 'Template type is not DEMO',
  TEMPLATE_TYPE_IS_NOT_INFO: 'Template type is not INFORMATION',
};
export const passwordMessages = {
  PASSWORD_NOT_FOUND: 'Password not found',
  PASSWORD_IS_DELETED: 'Password is deleted',
};
export const detailsMessages = {
  DETAILS_NOT_FOUND: 'Details not found',
  DETAILS_IS_DELETED: 'Details is deleted',
};
export const relayMessages = {
  RELAY_NOT_FOUND: 'Relay not found',
  RELAY_IS_DELETED: 'relay is deleted',
};
export const contentMessages = {
  CONTENT_NOT_FOUND: 'Content not found',
  CONTENT_IS_DELETED: 'Content is deleted',
};

export const authMessages = {
  ACCOUNT_DEACTIVATED: 'Consumer-User is disabled.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_CREDENTIALS_ERROR: 'Invalid email or password.',
  AUTH_HEADER_NOT_FOUND: 'Authorization header not found.',
  AUTH_HEADER_IS_NOT_BEARER: `Authorization header is not of type 'Bearer'.`,
  INVALID_AUTH_HEADER_BEARER: `Authorization header value has too many parts. It must follow the pattern: 'Bearer xx.yy.zz' where xx.yy.zz is a valid JWT token.`,
  SESSION_NOT_FOUND: 'Session not found.',
  SESSION_ALREADY_EXPIRED: 'Session is already expired.',
  SESSION_EXPIRED: 'Session is expired.',
  USER_NOT_FOUND: 'User not found.',
  TOKEN_EXPIRED: 'Token is expired please try again',
  CONSUMER_USER_PHONE_VERIFIED: `Consumer User's phone is already verified.`,
  LOGOUT_SUCCESS: 'Logout successful.',
  EMAIL_EXIST: 'Entered email already exist in system.',
  PHONE_EXIST: 'Entered phone number already exist in system.',
  PASSWORD_PATTERN_ERROR: `Password must contain at least 1 uppercase letter 1 lowercase letter 1 digit and 1 special character.`,
  SAME_AS_OLD_PASSWORD_ERROR:
    'New password should not be same as current password.',
  USERNAME_EXIST: 'Entered usermame already exist.',
  USERNAME_AVAILABLE: 'Usermame available.',
  PASSWORD_MATCH_ERROR: 'Password and confirm password does not match.',
  TOKEN_IS_EXPIRED: 'Token has been expired. Please try again.',
  INVALID_PASSWORD_ERROR: 'Current password is incorrect.',
  ENTER_VALID_OTP: 'Invalid code. Please try again.',
  OTP_IS_EXPIRED: 'OTP has been expired. Please try again.',
  PHONENUMBER_PATTERN_ERROR:
    'Phone numbers must be between 10 and 16 characters.',
  CODE_PATTERN_ERROR: 'Code must be between 1 and 3 characters.',
  SOCIAL_ERROR: 'You have to enter socialId as well as socialType.',
  SOCIAL_MATCH_TYPE: 'Social type does not match.',
  SOCIAL_MATCH_ID: 'Social id does not match.',
  EMAIL_MATCH: 'Email does not match.',
  AUTH_ERROR: 'Authentication token invalid.',
  SOCIAL: 'Please login from your social account',
  EMAIL: 'Please login from your Email Id',
  IS_EXIST:
    'Your Google/Apple account is not connected. Please create an account and connect your Google/Apple account during onboarding.',
};
