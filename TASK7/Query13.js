db.animals.aggregate([
    { $unwind: "$caretakers" },
    {
        $group: {
            _id: "$caretakers.nameCaretaker",
            idCaretaker: { $first: "$caretakers.idCaretaker" },
            animals: { $addToSet: "$name" }
        }
    },
    {
        $project: {
            _id: 0,
            nameCaretaker: "$_id",
            idCaretaker: 1,
            animals: 1
        }
    },
    { $out: "Caretakers" }
])
