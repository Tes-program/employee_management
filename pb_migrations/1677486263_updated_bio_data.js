migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbefporo",
    "name": "status",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // remove
  collection.schema.removeField("hbefporo")

  // remove
  collection.schema.removeField("mcgso3ni")

  return dao.saveCollection(collection)
})
