migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ishv3gcx",
    "name": "email",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 10,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // remove
  collection.schema.removeField("ishv3gcx")

  return dao.saveCollection(collection)
})
