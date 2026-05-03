db.animals.updateOne(
    { name: "Leo", species: "Lion" },
    { $set: { age: 8 } }
)
