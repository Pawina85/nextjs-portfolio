/**
 * Validates and cleans a Google App Password string
 * @param {string} appPassword - The app password string (may contain spaces)
 * @returns {{isValid: boolean, cleanedPassword?: string, error?: string}} - Validation result
 */
export function validateAppPassword(appPassword) {
  // Check if input is provided
  if (!appPassword || typeof appPassword !== 'string') {
    return {
      isValid: false,
      error: 'App password must be a non-empty string'
    };
  }

  // Remove all spaces
  const cleanedPassword = appPassword.replace(/\s+/g, '');

  // Check if the cleaned password is exactly 16 characters
  if (cleanedPassword.length !== 16) {
    return {
      isValid: false,
      error: `App password must be exactly 16 characters, got ${cleanedPassword.length}`
    };
  }

  // Check if it contains only alphanumeric characters
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(cleanedPassword)) {
    return {
      isValid: false,
      error: 'App password must contain only alphanumeric characters'
    };
  }

  return {
    isValid: true,
    cleanedPassword
  };
}

/**
 * Helper function that throws an error if the app password is invalid
 * @param {string} appPassword - The app password to validate
 * @returns {string} - The cleaned app password
 * @throws {Error} - If the app password is invalid
 */
export function getValidatedAppPassword(appPassword) {
  const result = validateAppPassword(appPassword);
  
  if (!result.isValid) {
    throw new Error(`Invalid App Password: ${result.error}`);
  }
  
  return result.cleanedPassword;
}

/**
 * Validates email configuration environment variables
 * @param {Object} env - Environment variables object
 * @returns {{isValid: boolean, errors: string[]}} - Validation result
 */
export function validateEmailConfig(env) {
  const errors = [];
  
  if (!env.EMAIL_USER) {
    errors.push('EMAIL_USER is required');
  } else if (!env.EMAIL_USER.includes('@gmail.com')) {
    errors.push('EMAIL_USER must be a Gmail address');
  }
  
  if (!env.EMAIL_PASS) {
    errors.push('EMAIL_PASS is required');
  } else {
    const passResult = validateAppPassword(env.EMAIL_PASS);
    if (!passResult.isValid) {
      errors.push(`EMAIL_PASS: ${passResult.error}`);
    }
  }
  
  if (!env.EMAIL_RECEIVER) {
    errors.push('EMAIL_RECEIVER is required');
  } else if (!env.EMAIL_RECEIVER.includes('@')) {
    errors.push('EMAIL_RECEIVER must be a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Example usage and tests
if (typeof module !== 'undefined' && module.exports) {
  // For testing purposes
  module.exports = {
    validateAppPassword,
    getValidatedAppPassword,
    validateEmailConfig
  };
}
