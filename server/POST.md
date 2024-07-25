# Requêtes POST

## Sommaire

- [Register](#register)
- [Login](#login)
- [Forgot Password](#forgot-password)
- [Create Acrea](#create-acrea)
- [Create Token User](#create-token-user)

<br/>

## REGISTER

URL: ```http://api-area-a.fr/register```

METHOD: POST

HEADERS: None

PARAMS: None

BODY:

| Params        | Type      | Required |
| :---:         | :---:     | :---:    |
| first_name    | String    | Yes      |
| last_name     | String    | Yes      |
| email         | String    | Yes      |
| password      | String    | Yes      |

RESPONSE:

| Status Code |  422  | User already exist |
|    :---:    | :---: | :---:              |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | User already exist |

<br/>

| Status Code |  422  | Bad value          |
|    :---:    | :---: | :---:              |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | Bad Value          |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | OK                 |
|    id       | int    | Id User            |
| first_name  | String | First name of User |
| last_name   | String | Last name of User  |
| ID Token    | String | JWT Token of User  |

<br/>

## LOGIN

URL: ```http://api-area-a.fr/login```

METHOD: POST

HEADERS: None

PARAMS: None

BODY:

| Params        | Type      | Required |
| :---:         | :---:     | :---:    |
| email         | String    | Yes      |
| password      | String    | Yes      |

RESPONSE:

| Status Code |  422  | User does not exist  |
|    :---:    | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | User does not exist |

<br/>

| Status Code |  422  | Wrong password or email  |
|    :---:    | :---: |   :---:                  |

|  Response   | Type   | Value                   |
|   :---:     | :---:  | :---:                   |
|   message   | String | Wrong password or email |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | OK                 |
|    id       | int    | Id User            |
| first_name  | String | First name of User |
| last_name   | String | Last name of User  |
| ID Token    | String | JWT Token of User  |

<br/>

## FORGOT PASSWORD

URL: ```http://api-area-a.fr/forgotPassword```

METHOD: POST

HEADERS: None

PARAMS: None

BODY:

| Params        | Type      | Required |
| :---:         | :---:     | :---:    |
| email         | String    | Yes      |
| password      | String    | Yes      |

RESPONSE:

| Status Code |  422  | User does not exist  |
|    :---:    | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | User does not exist |

<br/>

| Status Code |  422  | Bad Value  |
|    :---:    | :---: |   :---:    |

|  Response   | Type   | Value     |
|   :---:     | :---:  | :---:     |
|   message   | String | Bad Value |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | OK                 |
|    id       | int    | Id User            |
| first_name  | String | First name of User |
| last_name   | String | Last name of User  |
| ID Token    | String | JWT Token of User  |

<br/>

## Create Acrea

URL: ```http://api-area-a.fr/createAcrea```

METHOD: POST

HEADERS: Authorization: Bearer {ID TOKEN}

PARAMS: None

BODY:

| Params                    | Type        | Required |
| :---:                     | :---:       | :---:    |
| id_service_action         | int         | Yes      |
| id_service_reaction       | int         | Yes      |
| id_action                 | int         | Yes      |
| id_reaction               | int         | Yes      |
| arguments                 | String[]    | Yes      |
| params                    | String[]    | Yes      |

RESPONSE:

| Status Code |  401  | Unauthorized         |
|   :---:     | :---: |   :---:

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | Unauthorized        |

<br/>

| Status Code |  422  | Service doesnt exist |
|    :---:    | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | Service doesnt exist|

<br/>

| Status Code |  422  | Action-Reaction doesnt exist  |
|    :---:    | :---: |   :---:                       |

|  Response   | Type   | Value                        |
|   :---:     | :---:  | :---:                        |
|   message   | String | Action-Reaction doesnt exist |

<br/>

| Status Code |  422  | Bad Value  |
|    :---:    | :---: |   :---:    |

|  Response   | Type   | Value     |
|   :---:     | :---:  | :---:     |
|   message   | String | Bad Value |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | Acrea created      |

<br/>

## Create Token User

URL: ```http://api-area-a.fr/createTokenUser```

METHOD: POST

HEADERS: Authorization: Bearer {ID TOKEN} (Not obligatory)

PARAMS: None

BODY:

| Params                    | Type        | Required |
| :---:                     | :---:       | :---:    |
| service_name              | String      | Yes      |
| email                     | String      | No       |
| first_name                | String      | No       |
| last_name                 | String      | No       |
| token_service             | String      | Yes      |

RESPONSE:

```AUTHORIZATION TOKEN DEFINED```

| Status Code |  401  | Unauthorized         |
|   :---:     | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | Unauthorized        |

<br/>

| Status Code |  422  | Service doesnt exist |
|    :---:    | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | Service doesnt exist|

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value                        |
|   :---:     | :---:  | :---:                        |
|   message   | String | Token added succesfully      |

<br/>

```AUTHORIZATION TOKEN UNDEFINED```

| Status Code |  422  | User already exist   |
|   :---:     | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | User already exist  |

<br/>

| Status Code |  422  | Service doesnt exist |
|    :---:    | :---: |   :---:              |

|  Response   | Type   | Value               |
|   :---:     | :---:  | :---:               |
|   message   | String | Service doesnt exist|

<br/>

| Status Code |  422  | Not enough arguments   |
|    :---:    | :---: |   :---:                |

|  Response   | Type   | Value                 |
|   :---:     | :---:  | :---:                 |
|   message   | String | Not enough arguments  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | OK                 |
|    id       | int    | Id User            |
| first_name  | String | First name of User |
| last_name   | String | Last name of User  |
| ID Token    | String | JWT Token of User  |