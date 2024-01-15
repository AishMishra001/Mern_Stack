const zod = require("zod"); 

function inputValidation(arr){
  
  const schema = zod.array(zod.number()); 

  const response = schema.safeParse(arr);
  console.log(response);
}

inputValidation(["1",2,3]);

// safeParse() function in Zod:

// Purpose:

// Validates input data against a Zod schema without throwing errors.
// Provides a controlled way to handle validation failures, making it suitable for user-facing scenarios or error-sensitive contexts.
// Key Behaviors:

// Returns an object: Contains two properties:
// success: Boolean indicating whether validation passed (true) or failed (false).
// error: A ZodError object if validation failed, containing detailed error information.
// Prevents abrupt program termination: Doesn't throw errors, allowing for graceful error handling