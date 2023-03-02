migrate((db) => {
  const collection = new Collection({
    "id": "cx5jshiyqylp05m",
    "created": "2023-02-26 10:14:09.468Z",
    "updated": "2023-02-26 10:14:09.468Z",
    "name": "bio_data",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vmspszp5",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 6,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7nxtvelt",
        "name": "id_no",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m");

  return dao.deleteCollection(collection);
})
