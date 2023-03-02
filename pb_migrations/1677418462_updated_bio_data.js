migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ly0fdjti",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ly0fdjti",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 5,
      "max": 20
    }
  }))

  return dao.saveCollection(collection)
})
