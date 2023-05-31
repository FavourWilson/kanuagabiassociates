import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
	const [data, setData] = useState<any>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<any>();

	console.log(url);

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(url);
				setIsLoading(false);
				setData(
					res.data.data.lawyers.filter(
						(lawyer: any) => !lawyer.deleted
					)
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

export default useFetch;
