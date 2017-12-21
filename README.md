# ApiNoteRESTful

This project is a simple RESTful API to CRUD notes.

### Routes

* **URL**

  /notes

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[]`
___

* **URL**

  /notes

* **Method:**

  `POST`
  
 * **Data Params**
 
    { "title" : "String", "content" : "String" }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
        "_id": "5a393c1cf696a78213f23b08",
        "title": "String",
        "content": "String",
        "__v": 0
    }
]`
___

* **URL**

  /notes/:id

* **Method:**

  `DELETE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `title was deleted`
      
___

* **URL**

  /notes/:id

* **Method:**

  `UPDATE`

 * **Data Params**
 
    { "title" : "Updated" }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "_id": "5a39366bf15f1e80f788571d",
    "title": "String",
    "content": "Updated",
    "__v": 0
}`

## Built With

* [NodeJs](https://nodejs.org/en/)
* Express
