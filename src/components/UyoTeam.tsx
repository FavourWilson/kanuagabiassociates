import Card from "./Card";
import { getDataByLocation } from "../helpers/general";

const UyoTeam = ({ data }: { data: any }) => {
  const lawyerData = getDataByLocation("uyo", data);

  return (
    <div className="team__overview">
      {lawyerData && lawyerData.length > 0 ? (
        lawyerData.map((el: any) => (
          <Card
            img={el.image}
            name={el.name}
            role={el.role}
            id={el.id}
            key={el.id}
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

export default UyoTeam;
