# Requêtes DELETE

## Sommaire

 - [Delete User](#delete-user)
 - [Delete Acrea User](#delete-acrea-user)

<br/>

## Delete User

URL: ```http://api-area-a.fr/deleteUser```

METHOD: DELETE

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
|   message   | String | User Deleted    |

<br/>

## Delete Acrea User

URL: ```http://api-area-a.fr/deleteAcreaUser```

METHOD: DELETE

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

| Status Code |  422  | Acrea doesnt exist |
|    :---:    | :---: |   :---:            |

|  Response   | Type   | Value              |
|   :---:     | :---:  | :---:              |
|   message   | String | Acrea doesnt exist |

<br/>

| Status Code |  200  | Success |
|    :---:    | :---: | :---:   |

|  Response      | Type   | Value           |
|   :---:        | :---:  | :---:           |
|   message      | String | Acrea deleted   |
