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
