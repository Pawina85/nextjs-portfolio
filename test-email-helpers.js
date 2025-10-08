// Test cases for the Google App Password validator

// Helper function (same as in the API route)
function validateAppPassword(appPassword) {
  if (!appPassword || typeof appPassword !== 'string') {
    return {
      isValid: false,
      error: 'App password must be a non-empty string'
    };
  }

  const cleanedPassword = appPassword.replace(/\s+/g, '');

  if (cleanedPassword.length !== 16) {
    return {
      isValid: false,
      error: `App password must be exactly 16 characters, got ${cleanedPassword.length}`
    };
  }

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

function getValidatedAppPassword(appPassword) {
  const result = validateAppPassword(appPassword);
  if (!result.isValid) {
    throw new Error(`Invalid App Password: ${result.error}`);
  }
  return result.cleanedPassword;
}

console.log('🧪 Testing Google App Password Validator\n');

// Test cases
const testCases = [
  {
    name: "Valid password with spaces",
    input: "woxq njgt pvvz qjyr",
    expected: { isValid: true, cleanedPassword: "woxqnjgtpvvzqjyr" }
  },
  {
    name: "Valid password without spaces", 
    input: "woxqnjgtpvvzqjyr",
    expected: { isValid: true, cleanedPassword: "woxqnjgtpvvzqjyr" }
  },
  {
    name: "Valid password with multiple spaces",
    input: "wo xq  njgt   pvvz qj yr",
    expected: { isValid: true, cleanedPassword: "woxqnjgtpvvzqjyr" }
  },
  {
    name: "Invalid - too short",
    input: "woxq njgt pvvz",
    expected: { isValid: false, error: "App password must be exactly 16 characters, got 12" }
  },
  {
    name: "Invalid - too long",
    input: "woxq njgt pvvz qjyr extra",
    expected: { isValid: false, error: "App password must be exactly 16 characters, got 21" }
  },
  {
    name: "Invalid - contains special characters",
    input: "woxq-njgt-pvvz-qjyr",
    expected: { isValid: false, error: "App password must contain only alphanumeric characters" }
  },
  {
    name: "Invalid - empty string",
    input: "",
    expected: { isValid: false, error: "App password must be a non-empty string" }
  },
  {
    name: "Invalid - null input",
    input: null,
    expected: { isValid: false, error: "App password must be a non-empty string" }
  }
];

// Run tests
testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log(`Input: "${testCase.input}"`);
  
  try {
    const result = validateAppPassword(testCase.input);
    console.log(`Result:`, result);
    
    // Check if the result matches expected
    const matches = result.isValid === testCase.expected.isValid;
    if (result.isValid) {
      console.log(`✅ Valid - Cleaned password: "${result.cleanedPassword}"`);
    } else {
      console.log(`❌ Invalid - Error: ${result.error}`);
    }
    
  } catch (error) {
    console.log(`💥 Unexpected error: ${error.message}`);
  }
  
  console.log('---\n');
});

// Example usage in your email setup
console.log('📧 Example Usage in Email Setup:\n');

try {
  // This would work with a valid app password
  const cleanedPassword = getValidatedAppPassword("woxq njgt pvvz qjyr");
  console.log(`✅ Cleaned password ready for use: "${cleanedPassword}"`);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

console.log('\n🔧 In your .env.local file:');
console.log('EMAIL_PASS=woxq njgt pvvz qjyr  # Spaces are automatically handled!');
