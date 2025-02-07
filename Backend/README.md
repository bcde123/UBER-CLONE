## /users/register Endpoint Documentation

### Description
Registers a new user in the system. The endpoint expects a JSON payload with user details. On success, it returns a JWT token along with the user data.

### HTTP Request
- **Method:** POST
- **Endpoint:** /users/register

### Request Body

- **fullname:**  
  - **firstname:** string (required, at least 3 characters)  
  - **lastname:** string (optional, at least 3 characters if provided)
- **email:** string (required, must be a valid email)
- **password:** string (required, at least 6 characters)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success (201 Created)
```json
{
  "token": "JWT_TOKEN",
  "user": { /* user object details */ }
}
```

#### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field",
      "location": "body"
    }
  ]
}
```

#### User Already Exists (400 Bad Request)
```json
{
  "message": "User already exist"
}
```

#### Malformed JSON (400 Bad Request)
```json
{
  "message": "Malformed JSON in request body"
}
```

## /users/login Endpoint Documentation

### Description
Authenticates a user. The endpoint expects a JSON payload with email and password. On success, it returns a JWT token along with the user data.

### HTTP Request
- **Method:** POST
- **Endpoint:** /users/login

### Request Body

- **email:** string (required, must be a valid email)
- **password:** string (required, at least 6 characters)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success (200 OK)
```json
{
  "token": "JWT_TOKEN",
  "user": { /* user object details */ }
}
```

#### Authentication Error (401 Unauthorized)
```json
{
  "message": "Invalid email or password "
}
```

#### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field",
      "location": "body"
    }
  ]
}
```

## /users/profile Endpoint Documentation

### Description
Fetches the authenticated user's profile. Requires a valid JWT token provided in the `Authorization` header or via cookie.

### HTTP Request
- **Method:** GET
- **Endpoint:** /users/profile

### Responses

#### Success (200 OK)
```json
{
  "user": { /* authenticated user object details */ }
}
```

#### Unauthorized (401 Unauthorized)
```json
{
  "message": "Authentication failed"
}
```

## /users/logout Endpoint Documentation

### Description
Logs the user out by clearing the authentication cookie and blacklisting the current token.

### HTTP Request
- **Method:** GET
- **Endpoint:** /users/logout

### Responses

#### Success (200 OK)
```json
{
  "message": "Logout successfully"
}
```
