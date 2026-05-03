db.animals.find(
    {},
    { name: 1, species: 1, habitat: 1, _id: 0 }
).sort({ species: 1 })
