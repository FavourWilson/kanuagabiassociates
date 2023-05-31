import axios from "axios";
import { useEffect, useState } from "react";

const useManagersSlideFetch = (url: string) => {
	const [data, setData] = useState<any>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<any>();

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(url);
				setIsLoading(false);

				console.log(groupMembers(res.data.data.managements, 3));

				setData(
					groupMembers(res.data.data.managements, 3) /* .filter(
						(manager: any) => !manager.deleted
					) */
				);
			} catch (error) {
				setIsLoading(false);
				setError(error);
			}
		};

		getData();
	}, [url]);
	return { data, isLoading, error, setData };
};

export default useManagersSlideFetch;

function groupMembers(list: any, groupSize: number) {
	const groupedObjects = [];
	let group = [];

	for (let i = 0; i < list.length; i++) {
		group.push(list[i]); // Add the current object to the group

		if (group.length === groupSize || i === list.length - 1) {
			groupedObjects.push(group); // Add the completed group to the groupedObjects list
			group = []; // Reset the group array
		}
	}

	return groupedObjects;
}
