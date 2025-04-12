import { useEffect, useState } from 'react';
import { db, Food } from '../db';
import Nav from '../components/Nav';

function LogCreate() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    db.foods.toArray().then(setFoods);
  }, []);

  const addTestFood = async () => {
    await db.foods.add({
      name: 'Chicken',
      caloriesPerGram: 5,
      proteinPerGram: 6,
      fatPerGram: 3.6,
      carbsPerGram: 0,
    });
    const updated = await db.foods.toArray();
    setFoods(updated);
  };

  const removeFood = async (id: number) => {
    await db.foods.delete(id);
    const updated = await db.foods.toArray();
    setFoods(updated);
  };

  return (
    <>
        <Nav />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">My Foods</h1>
            <ul className="space-y-2 mb-4">
            {foods.map(f => (
                <li
                key={f.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
                >
                <span className="text-gray-700">
                    {f.name} - {f.caloriesPerGram} calories per gram
                </span>
                <button
                    onClick={() => removeFood(f.id!)}
                    className="text-sm text-red-600 hover:text-red-800 transition"
                >
                    Remove
                </button>
                </li>
            ))}
            </ul>
            <button
            onClick={addTestFood}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
            Add Test Food
            </button>
        </div>
        </div>
    </>
  );
}

export default LogCreate;