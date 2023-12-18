import { useListPets } from "./api/pets/pets";

function App() {
	const { data: pets, refetch } = useListPets();

	console.log(pets);
	console.log(refetch);

	return <h1>Vite + React</h1>;
}

export default App;
