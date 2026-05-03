db.animals.aggregate([
    { $unwind: "$caretakers" },
    {
        $group: {
            _id: "$environment",
            totalAnimals: { $sum: 1 },
            species: { $addToSet: "$species" },
            caretakers: { $addToSet: "$caretakers.nameCaretaker" }
        }
    },
    {
        $project: {
            _id: 0,
            environment: "$_id",
            totalAnimals: 1,
            species: { $sortArray: { input: "$species", sortBy: 1 } },
            caretakers: 1
        }
    },
    { $out: "Habitats" }
])
