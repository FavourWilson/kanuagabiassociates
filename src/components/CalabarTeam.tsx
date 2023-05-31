import Card from "./Card";
import { getDataByLocation } from "../helpers/general";

const CalabarTeam = ({ data }: { data: any }) => {
  const lawyerData = getDataByLocation("calabar", data);

  return (
    <div className="team__overview">
      {lawyerData && lawyerData.length > 0 ? (
        lawyerData.map((el: any) => (
          <Card img={el.image} name={el.name} id={el.id} key={el.id} />
        ))
      ) : (
        <div>
          <p>There are no lawyers in this location</p>
        </div>
      )}
    </div>
  );
};

export default CalabarTeam;
