import Card from "./Card";
import { getDataByLocation } from "../helpers/general";

const LagosTeam = ({ data }: { data: any }) => {
	const lawyerData = getDataByLocation("lagos", data);

	return (
		<div className="team__overview">
			{lawyerData && lawyerData.length > 0 ? (
				lawyerData.map((el: any) => (
					<Card
						img={el.image}
						name={el.name}
						role={el.role}
						id={el._id}
						key={el._id}
					/>
				))
			) : (
				<div>
					<p>There are no lawyers in this location</p>
				</div>
			)}
		</div>
	);
};

export default LagosTeam;
