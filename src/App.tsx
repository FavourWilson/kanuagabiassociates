import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import GlobalContext from "./contexts/GlobalContext";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Careers from "./pages/Careers";
import Opportunities from "./pages/Opportunities";
import Services from "./pages/Services";
import Practice from "./pages/Practice";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Insights from "./pages/Insights";
import NewsDetail from "./pages/NewsDetails";
import { Login } from "./pages/Login";
import { AdminForm } from "./pages/AdminForm";
import AdminMain from "./pages/AdminMain";
import { ManagementForm } from "./pages/ManagementForm";
import ManagementProfile from "./pages/ManagementProfile";

function App() {
	return (
		<Router>
			<GlobalContext>
				<ToastContainer className={"text-2xl"} />

				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Login />} />
						<Route
							path="/admin/createlawyers"
							element={<AdminForm />}
						/>
						<Route
							path="/admin/add-manager"
							element={<ManagementForm />}
						/>
						<Route
							path="/admin/createlawyers/edit/:id"
							element={<AdminForm />}
						/>
						<Route
							path="/admin/lawfirm/kanu_agabi_dashboard/:tab"
							element={<AdminMain />}
						/>
						<Route path="services/about" element={<About />} />
						<Route
							path="services/practice_areas"
							element={<Services />}
						/>
						<Route
							path="services/practice_areas/uu"
							element={<Practice />}
						/>
						<Route
							path="/locations/:name"
							element={<Locations />}
						/>
						<Route path="/careers" element={<Careers />} />
						<Route path="/team" element={<Team />} />
						<Route
							path="/management/:id"
							element={<ManagementProfile />}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route path="/news_and_articles" element={<News />} />
						<Route
							path="/careers/opportunities"
							element={<Opportunities />}
						/>
						<Route path="/team/:id" element={<Practice />} />
						<Route path="/insights" element={<Insights />} />
						<Route path="/news/detail" element={<NewsDetail />} />
					</Routes>
				</div>
			</GlobalContext>
		</Router>
	);
}

export default App;
