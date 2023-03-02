migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p3ewpcrs",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // remove
  collection.schema.removeField("p3ewpcrs")

  return dao.saveCollection(collection)
})
