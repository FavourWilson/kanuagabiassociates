import { base_url } from "../utils/config";

const Card = ({
  img,
  name,
  role,
  id,
}: {
  img: string;
  name?: string;
  role?: string;
  id: number;
}) => {
  return (
		<a
			href={`/team/${id}`}
			style={{ textDecoration: "none", color: "#000" }}
		>
			<div className="team__card">
				<img
					alt="member"
					className="team__card-img"
					src={`${base_url}/lawyerImages/${img}`}
				/>

				<div className="team__details">
					<h4 className="team__card-heading">{name}</h4>
					<p className="team__card-text">{role ? role : "partner"}</p>
			  </div>
			  
			  
			</div>
		</a>
  );
};

export default Card;
