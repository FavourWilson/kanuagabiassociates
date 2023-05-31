import axios from "axios";
import Cookies from "js-cookie";
import { LawyerUrl, loginUrl, managementUrl, signupUrl } from "../utils/urls";
import { displayErrorToast, displaySuccessToast } from "./toast";
export const getDataByLocation = (location: string, employees: any) => {
	const data = employees.filter(
		(el: any) => el.location.toLowerCase() === location.toLowerCase()
	);
	return data;
};

export const registerUser = async (data: any) => {
	try {
		const response = await axios.post(signupUrl, data);
		console.log(response.data.token);
		Cookies.set("user_auth_token", JSON.stringify(response.data.token), {
			expires: 12,
		});
		displaySuccessToast("Authentication successfull");
		return response;
	} catch (error: any) {
		displayErrorToast(error.response.data.message);
	}
};

export const loginUser = async (data: any) => {
	try {
		const response = await axios.post(loginUrl, data);
		Cookies.set("user_auth_token", JSON.stringify(response.data.token), {
			expires: 12,
		});
		displaySuccessToast("Authentication successfull");
		return response;
	} catch (error: any) {
		displayErrorToast(error.response.data.message);
	}
};

export const createManager = async (data: any, userAuth: string) => {
	try {
		await axios.post(managementUrl, data, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Manager created successfully");
	} catch (error) {
		displayErrorToast("Something went wrong");
	}
};

export const deleteManager = async (id: String, userAuth: string) => {
	try {
		const response = await axios.delete(`${managementUrl}/delete/${id}`, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Deleted successfully");

		return response.data.json();
	} catch (error) {
		displayErrorToast("Something went wrong");
	}
};

export const updateManager = async (data: any, userAuth: string, id: string) => {
	try {
		const response = await axios.patch(`${managementUrl}${id}`, data, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Manager updated successfully");
		return response.data;
	} catch (error) {
		displayErrorToast("Something went wrong");
		console.log(error);
	}
};



export const createLawyers = async (data: any, userAuth: string) => {
	try {
		await axios.post(LawyerUrl, data, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Lawyer created successfully");
	} catch (error) {
		displayErrorToast("Something went wrong");
	}
};

export const deleteLawyer = async (id: String, userAuth: string) => {
	try {
		const response = await axios.delete(`${LawyerUrl}/delete/${id}`, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Deleted successfully");

		return response.data.json();
	} catch (error) {
		displayErrorToast("Something went wrong");
	}
};

export const updateLawyers = async (
	data: any,
	userAuth: string,
	id: string
) => {
	try {
		const response = await axios.patch(`${LawyerUrl}${id}`, data, {
			headers: {
				authorization: userAuth,
			},
		});

		displaySuccessToast("Lawyer updated successfully");
		return console.log(response);
	} catch (error) {
		displayErrorToast("Something went wrong");
		console.log(error);
	}
};
