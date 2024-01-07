export const muscleGroups = [
    { id: 1, name: "Legs", exercises: ["lunges", "squats", "leg extensions"] },
    { id: 2, name: "Chest", exercises: ["bench press", "incline bench press", "pec flies"] },
    { id: 3, name: "Back", exercises: ["rows", "lat pulldown", "cable pulldown"] },
    { id: 4, name: "Biceps", exercises: ["curls", "hammer curls", "machine curls"] },
    { id: 5, name: "Triceps", exercises: ["tricep extensions", "triceps machine", "skull crushers"] },
    { id: 6, name: "Shoulders", exercises: ["lat raises", "shoulder press", "rear flies"] },
    { id: 7, name: "Abs", exercises: ["sit ups", "planks", "crunches"] },
    { id: 8, name: "Cardio", exercises: ["treadmill", "bike", "running", "swimming", "jumping", "plyometrics", "sprinting", "sports", "skiing"] },
]

export type MuscleGroupType = {
    id: number;
    name: string;
    exercises: string[];
}[]