db.animals.updateMany(
    {},
    { $rename: { "habitat": "environment" } }
)
