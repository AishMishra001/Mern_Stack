## Authentication 
: it is kind of a security check .
: when we sign up in some website the backend gives us JWT (json web token) which is a unique id . 

## JWT includes : 

1.Generating (creating a cheque book in bank example) : Backend server creates a long string of jwt which if ever comes back to the backend it can verify it . 
2.Decoding 
3.Verifying 

## parse() vs safeParse()
In Zod, parse() and safeParse() are two methods that serve similar purposes, but they behave differently when it comes to error handling.

### parse()

The parse() method takes an input value and attempts to validate it against the schema. If the input value is invalid, parse() will throw an error containing information about the validation failure.

Here's an example:

Copy code
const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string()
});

try {
  const validData = userSchema.parse({ username: 'invalid', password: 'password' });
  console.log(validData); // never reached
} catch (error) {
  console.error(error); // ZodError: "username" must be a valid email
}
### safeParse()

The safeParse() method, on the other hand, takes an input value and attempts to validate it against the schema, just like parse(). However, if the input value is invalid, safeParse() will return an object with two properties: success and error. The success property will be false, and the error property will contain information about the validation failure.

Here's an example:

Copy code
const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string()
});

const result = userSchema.safeParse({ username: 'invalid', password: 'password' });
console.log(result); // { success: false, error: ZodError: "username" must be a valid email }
Key differences

#### The main difference between parse() and safeParse() is how they handle errors:

parse() throws an error if the input value is invalid.
safeParse() returns an object with an error property if the input value is invalid.
When to use each:

Use parse() when you want to validate input data and throw an error if it's invalid.
Use safeParse() when you want to validate input data and handle errors explicitly, without throwing an exception.