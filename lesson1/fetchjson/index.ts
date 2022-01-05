import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/2";

// interface with purpose to type objects
interface ITodoData {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

const getTodoData = async () => {
	try {
		await axios.get<ITodoData>(url).then((response) => {
			// const { id, title, completed } = response.data as ITodoData; typed with type alias
			const { id, title, completed } = response.data; // typed with generic
			logger(id, title, completed);
		});
	} catch (error) {
		errorLogger(error);
	}
};

const logger = (id: number, title: string, completed: boolean) => {
	console.log(
		`TODO with ID: ${id}, title: ${title} and it's ${
			completed ? "completed" : "not completed"
		}`
	);
};

const errorLogger = (error: unknown) => {
	console.log(
		`OH NO, SOMETHING WENT WRONG ${error}
		`
	);
};

// IIFE Function
(() => {
	getTodoData();
})();
