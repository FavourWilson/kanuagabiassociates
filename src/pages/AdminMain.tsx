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
import useFetch from "../customs/useFetch";
import { useState } from "react";
import { LawyerUrl } from "../utils/urls";
import IsLoading from "../components/IsLoading";
import { CTX } from "../contexts/GlobalContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { deleteLawyer } from "../helpers/general";
import { ManagementTab } from "../components/ManagementTab";

const AdminMain = () => {
	const { tab } = useParams();

	const [deletable, setDeletable] = useState<String>("");
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [navIsVisible, setNavIsVisible] = useState<boolean>(false);
	const { data, setData, isLoading } = useFetch(LawyerUrl);
	const [filteredData, setFilteredData] = useState<any>("");
	const { userAuth, logout, handleLawyerToEdit } = CTX();
	const navigate = useNavigate();

	const handleEditAction = (e: any, lawyer: any) => {
		e.preventDefault();
		handleLawyerToEdit(lawyer);
		Cookies.set("lawyerToEdit", JSON.stringify(lawyer));
		navigate(`/admin/createlawyers/edit/${lawyer._id}`);
	};

	const handleDeleteAction = (e: any, lawyer: any) => {
		e.preventDefault();

		setShowDeleteModal(true);
		setDeletable(lawyer?._id);
	};

	const deleteALawyer = async () => {
		await deleteLawyer(deletable, userAuth);

		setData(data.filter((lawyer: any) => lawyer._id !== deletable));
		setDeletable("");
		setShowDeleteModal(false);
	};

	const closeDeleteModal = () => {
		setShowDeleteModal(false);
	};

	const handleNavVisibility = () => {
		setNavIsVisible(!navIsVisible);
	};

	const getDataFromSearch = (query: string, data: any) => {
		if (!query) return data;
		return data.filter((lawyer: any) =>
			lawyer.fullName.toLowerCase().includes(query)
		);
	};

	const handleSearchInput = (e: any) => {
		const query = e.target.value;
		const lawyerData = getDataFromSearch(query, data);

		if (query.length < 1) {
			setFilteredData(null);
		} else {
			setFilteredData(lawyerData);
		}
		console.log(query.length, "first", lawyerData);
	};

	if (isLoading) {
		return <IsLoading isLoading={isLoading} />;
	}

	if (!userAuth) {
		return <Navigate to="/login" />;
	}

	return (
		<main>
			<div className="admin__header-cont">
				<a href="/" className="admin__logo">
					Kanuagabilegal
				</a>
				<div className="admin__search-cont">
					<input
						type="text"
						placeholder="search for anything "
						onChange={handleSearchInput}
					/>
					<div className="admin__search-iconbox">
						<IoSearchOutline className="admin__search-icon" />
					</div>
				</div>
				<div className="admin__details">
					<div className="admin__user-box">
						<IoPersonOutline className="admin__user" />
					</div>
					<h3>aniebet apkan</h3>
				</div>
				{!navIsVisible && (
					<IoMenu
						className="nav__menu"
						onClick={handleNavVisibility}
					/>
				)}
				{navIsVisible && (
					<IoClose
						className="nav__menu"
						onClick={handleNavVisibility}
					/>
				)}
			</div>

			<section className="admin__main">
				<nav
					className={`admin__nav ${
						navIsVisible ? "visible__nav" : ""
					}`}
				>
					{
						<a href="/" className="logo_mb">
							Kanuagabilegal
						</a>
					}
					<ul className="admin__nav-ul">
						<li className="admin__nav-li">
							<a
								href="/admin/lawfirm/kanu_agabi_dashboard/management"
								className="admin__nav-a"
							>
								<IoPeopleOutline className="admin__nav-icon" />
								Managements
							</a>
						</li>

						<li className="admin__nav-li">
							<a
								href="/admin/add-manager"
								className="admin__nav-a"
							>
								<IoPersonAddOutline className="admin__nav-icon" />
								Add a Management Team
							</a>
						</li>

						<li className="admin__nav-li">
							<a
								href="/admin/lawfirm/kanu_agabi_dashboard/lawyer"
								className="admin__nav-a"
							>
								<IoPeopleOutline className="admin__nav-icon" />
								Lawyers
							</a>
						</li>

						<li className="admin__nav-li">
							<a
								href="/admin/createlawyers"
								className="admin__nav-a"
							>
								<IoPersonAddOutline className="admin__nav-icon" />
								Add a Lawyer
							</a>
						</li>

						<li className="admin__nav-li" onClick={logout}>
							<a
								href="/admin/createlawyers"
								className="admin__nav-a"
							>
								<IoPersonOutline className="admin__nav-icon" />
								Logout
							</a>
						</li>
					</ul>
				</nav>

				{tab === "management" ? (
					<ManagementTab />
				) : (
					// Lawyers tab
					<div className="admin__content">
						<div className="admin__content-box">
							<div className="icon_box">
								<IoPeopleOutline className="admin__content-icon" />
							</div>
							<h3>Lawyers</h3>
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

							{filteredData?.length < 1 ? (
								data?.map((lawyer: any) => (
									<a
										href={`/team/${lawyer._id}`}
										className="table_link"
										key={lawyer._id}
									>
										<div className="admin__td">
											<div className="td1">
												{lawyer.fullName}
											</div>
											<div className="td-ext">
												<IoTrashOutline
													size="2rem"
													className="trash_i"
													onClick={(e: any) => {
														handleDeleteAction(
															e,
															lawyer
														);
													}}
												/>
												<IoClipboardOutline
													size="2rem"
													className="edit_i"
													// @ts-ignore
													onClick={(e: any) =>
														handleEditAction(
															e,
															lawyer
														)
													}
												/>
											</div>
											<div className="td2">
												{lawyer.role}
											</div>
											<div className="td3">
												{lawyer.yearOfCall}
											</div>
											<div className="td4">
												{lawyer.location}
											</div>
											<div className="td5">
												{lawyer.contactEmail}
											</div>
										</div>
									</a>
								))
							) : (
								<div className="admin__empty">
									<p className="admin__empty-text">
										There are no Lawyers to
										display............
									</p>
								</div>
							)}
						</div>
					</div>
				)}
			</section>

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
		</main>
	);
};

export default AdminMain;
