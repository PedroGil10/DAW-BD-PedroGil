db.animals.aggregate([
    {
        $group: {
            _id: "$species",
            totalAnimals: { $sum: 1 }
        }
    },
    { $sort: { _id: 1 } }
])
