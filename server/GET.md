# Requêtes GET

## Sommaire

 - [Get User](#get-user)
 - [Get Service](#get-service)
 - [Get Action](#get-action)
 - [Get Acrea User](#get-acrea-user)
 - [Get Token](#get-token)

<br/>

## Get User

URL: ```http://api-area-a.fr/getUser```

METHOD: GET

HEADERS: Authorization: Bearer {ID Token}

PARAMS: None

BODY: None

RESPONSE:

| Status Code |  401  | Unauthorized   |
|    :---:    | :---: |   :---:        |

|  Response   | Type   | Value         |
|   :---:     | :---:  | :---:         |
|   message   | String | Unauthorized  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response   | Type   | Value           |
|   :---:     | :---:  | :---:           |
|   Users     | Array  | [See below]     |

Array Elements:

| Name         | Type       |
| :---:        | :---:      |
| created_date |   date     |
| email        | String     |
| first_name   | String     |
| last_name    | String     |
| id           | int        |

<br/>

## Get Service

URL: ```http://api-area-a.fr/getService```

METHOD: GET

HEADERS: Authorization: Bearer {ID Token}

PARAMS: None

BODY: None

RESPONSE:

| Status Code |  401  | Unauthorized   |
|    :---:    | :---: |   :---:        |

|  Response   | Type   | Value         |
|   :---:     | :---:  | :---:         |
|   message   | String | Unauthorized  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response      | Type   | Value           |
|   :---:        | :---:  | :---:           |
|   services     | Array  | [See below]     |

Array Elements:

| Name         | Type       |
| :---:        | :---:      |
| id           |   int      |
| service_name | String     |

<br/>

## Get Action

URL: ```http://api-area-a.fr/getAction```

METHOD: GET

HEADERS: Authorization: Bearer {ID Token}

PARAMS:

| Params | Type  | Required |
| :---:  | :---: | :---:    |
| id     | int   | yes      |

BODY: None

RESPONSE:

| Status Code |  401  | Unauthorized   |
|    :---:    | :---: |   :---:        |

|  Response   | Type   | Value         |
|   :---:     | :---:  | :---:         |
|   message   | String | Unauthorized  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  422  | Bad service |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value       |
|   :---:     | :---:  | :---:       |
|   message   | String | Bad service |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response      | Type   | Value           |
|   :---:        | :---:  | :---:           |
|   Acrea        | Array  | [See below]     |

Array Elements:

| Name                  | Type     |
| :---:                 | :---:    |
| acrea_description     | String   |
| acrea_name            | String   |
| id                    | int      |
| name_params           | String[] |
| number_params         | int      |

<br/>

## Get Acrea User

URL: ```http://api-area-a.fr/getAcreaUser```

METHOD: GET

HEADERS: Authorization: Bearer {ID Token}

PARAMS: None

BODY: None

RESPONSE:

| Status Code |  401  | Unauthorized   |
|    :---:    | :---: |   :---:        |

|  Response   | Type   | Value         |
|   :---:     | :---:  | :---:         |
|   message   | String | Unauthorized  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response      | Type   | Value           |
|   :---:        | :---:  | :---:           |
|   acrea        | Array  | [See below]     |

Array Elements:

| Name                | Type       |
| :---:               | :---:      |
| id                  |   int      |
| created_date        |   date     |
| action_id           |   int      |
| reaction_id         |   int      |
| service_action_id   |   int      |
| service_reaction_id |   int      |
| user_id             |   int      |
| params_action       |  String[]  |
| params_reaction     |  String[]  |

<br/>

## Get Token

URL: ```http://api-area-a.fr/getToken```

METHOD: GET

HEADERS: Authorization: Bearer {ID Token}

PARAMS: None

BODY: None

RESPONSE:

| Status Code |  401  | Unauthorized   |
|    :---:    | :---: |   :---:        |

|  Response   | Type   | Value         |
|   :---:     | :---:  | :---:         |
|   message   | String | Unauthorized  |

<br/>

| Status Code |  422  | Bad Value   |
|    :---:    | :---: |   :---:     |

|  Response   | Type   | Value      |
|   :---:     | :---:  | :---:      |
|   message   | String | Bad Value  |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response      | Type   | Value           |
|   :---:        | :---:  | :---:           |
|   Token        | Array  | [See below]     |

Array Elements:

| Name                | Type       |
| :---:               | :---:      |
| id                  |   int      |
| created_date        |   date     |
| user_id             |   int      |
| service_id          |   int      |
| token               |   String   |