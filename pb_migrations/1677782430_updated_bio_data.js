migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // remove
  collection.schema.removeField("mcgso3ni")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mj1wawuf",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": true,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mcgso3ni",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("mj1wawuf")

  return dao.saveCollection(collection)
})
