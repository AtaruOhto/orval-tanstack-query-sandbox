import { useCallback } from "react";
import { useListPets } from "src/api/pets/pets";
import { Pet } from "./model";

function App() {
	const { data: pets, refetch } = useListPets();

	const refetchCallback = useCallback(() => {
		refetch();
	}, [refetch]);

	return (
		<main>
			<button type="button" onClick={refetchCallback}>
				Refetch
			</button>
			<ul>
				{pets &&
					pets.data &&
					pets.data.length &&
					pets.data.map((pet: Pet) => <li>{pet.name}</li>)}
			</ul>
		</main>
	);
}

export default App;
