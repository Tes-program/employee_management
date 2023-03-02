migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "megi2k7f",
    "name": "profile_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/webp",
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [
        "60x60"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dyik5irm",
    "name": "address",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 60,
      "pattern": ""
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jxj7ldhu",
    "name": "country",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx5jshiyqylp05m")

  // remove
  collection.schema.removeField("megi2k7f")

  // remove
  collection.schema.removeField("dyik5irm")

  // remove
  collection.schema.removeField("ly0fdjti")

  // remove
  collection.schema.removeField("jxj7ldhu")

  return dao.saveCollection(collection)
})
