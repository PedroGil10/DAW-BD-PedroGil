db.animals.find(
    { species: "Tiger" },
    { name: 1, age: 1, _id: 0 }
).sort({ age: -1 })
