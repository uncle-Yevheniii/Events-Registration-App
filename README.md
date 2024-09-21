# Events-Registration-App

ElifTech School [Test task]


## ! Warning, the project is implemented on the free Render hosting, so the first launch may be delayed !

Both the server part (./BE) and the client part (./FE) are implemented in the repository

#### The following dependencies were used in the project:

| Be (server): | FE (client):    | 
| :-------- | :------- | 
| `mongoose` | `axios` | 
| `express` | `formik` | 
| `dotenv` | `react-router-dom` | 
| `cors` | `yup` | 
| `clors` | `react-helmet-async` | 
| `joi` | | 



## BE API Reference
Implemented: [Create an event, Get all events, Get a current event by its ID and Register for a current event]. 

In addition, there is data validation on POST requests and verification of the correctness of the ID

#### Get all events

```http
  GET /api/routes/all-events/?${p}=0
```

default value:

CURRENT_PAGE = 0,
PER_PAGE = 6

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `p` | `string` | page events|

#### Get current event

```http
  GET /api/current-event/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Register on current event


```http
  POST /api/register-event/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fullName`      | `string` | **Required** .min(6).max(25) |
| `email`      | `string` | **Required** .email(minDomainSegments: 2,  allow: ['com', 'net', 'ua'] |
| `dateOfBirth`      | `string` | **Required** .pattern(format: DD-MM-YYYY). |
| `aboutEvent`      | `string` | **Required** .valid(Social media, Friends, Found myself) |

#### Create event


```http
  POST /api/create-event/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required** .min(6).max(50) |
| `description`      | `string` | **Required** .max(255) |
| `organizer`      | `string` | **Required** .min(6).max(25). |

## FE Reference
Implemented routing: [Get all events, get the current event by its ID and register for the current event].

In addition, there is data validation when registering for the current event, pagination is present.
