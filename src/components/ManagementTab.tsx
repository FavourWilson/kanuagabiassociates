import { useState } from "react";
import {
	IoSearchOutline,
	IoPersonOutline,
	IoPeopleOutline,
	IoPersonAddOutline,
	IoMenu,
	IoClose,
	IoTrashOutline,
	IoClipboardOutline,
} from "react-icons/io5";

import Cookies from "js-cookie";
import { CTX } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import useManagersFetch from "../customs/useManagersFetch";
import { managementUrl } from "../utils/urls";
import { deleteManager } from "../helpers/general";

export const ManagementTab = () => {
	const { data, setData, isLoading } = useManagersFetch(managementUrl);

	const { userAuth, logout, handleLawyerToEdit } = CTX();
	const [deletable, setDeletable] = useState<String>("");
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const navigate = useNavigate();

	const handleDeleteAction = (e: any, member: any) => {
		e.preventDefault();

		setShowDeleteModal(true);
		setDeletable(member?._id);
	};

	const handleEditAction = (e: any, manager: any) => {
		e.preventDefault();
		handleLawyerToEdit(manager);
		Cookies.set("managerToEdit", JSON.stringify(manager));
		navigate(`/admin/create-manager/edit/${manager._id}`);
	};

	const closeDeleteModal = () => {
		setShowDeleteModal(false);
	};

	const deleteALawyer = async () => {
		await deleteManager(deletable, userAuth);

		setData(data.filter((manager: any) => manager._id !== deletable));
		setDeletable("");
		setShowDeleteModal(false);
	};

	return (
		<>
			<div className="admin__content">
				<div className="admin__content-box">
					<div className="icon_box">
						<IoPeopleOutline className="admin__content-icon" />
					</div>
					<h3>Management</h3>
					<h2>{data && data.length}</h2>
				</div>

				<div className="admin__lawyers-table">
					<div className="admin__th">
						<div className="th1">fullname</div>
						<div className="th2">role</div>
						<div className="th3">year of call</div>
						<div className="th4">location</div>
						<div className="th5">contact email</div>
					</div>

					{data?.length >= 1 ? (
						data?.map((manager: any) => (
							<a
								href={`/management/${manager._id}`}
								className="table_link"
								key={manager._id}
							>
								<div className="admin__td">
									<div className="td1">
										{manager.fullName}
									</div>
									<div className="td-ext">
										<IoTrashOutline
											size="2rem"
											className="trash_i"
											onClick={(e: any) => {
												handleDeleteAction(e, manager);
											}}
										/>
										<IoClipboardOutline
											size="2rem"
											className="edit_i"
											// @ts-ignore
											onClick={(e: any) =>
												handleEditAction(e, manager)
											}
										/>
									</div>
									<div className="td2">{manager.role}</div>
									<div className="td3">
										{manager.yearOfCall}
									</div>
									<div className="td4">
										{manager.location}
									</div>
									<div className="td5">
										{manager.contactEmail}
									</div>
								</div>
							</a>
						))
					) : (
						<div className="admin__empty">
							<p className="admin__empty-text">
								There are no management to display............
							</p>
						</div>
					)}
				</div>
			</div>

			<footer>
				<div
					className={`delete-modal-container ${
						showDeleteModal ? "show" : ""
					}`}
				>
					<div className="delete-modal">
						<div className="close-delete-modal">
							<IoClose
								className="icon"
								onClick={(e: any) => closeDeleteModal()}
							/>
						</div>

						<p>Are you sure you want to delete?</p>

						<div className="actions">
							<button onClick={(e: any) => closeDeleteModal()}>
								No
							</button>
							<button
								onClick={(e: any) => {
									deleteALawyer();
								}}
							>
								Yes
							</button>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
