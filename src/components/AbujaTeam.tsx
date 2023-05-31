import { getDataByLocation } from "../helpers/general";
import Card from "./Card";

const AbujaTeam = ({ data }: { data: any }) => {
  const abjLawyerData = getDataByLocation("abuja", data);
  console.log(abjLawyerData);
  return (
    <div className="team__overview">
      {abjLawyerData && abjLawyerData.length > 0 ? (
        abjLawyerData.map((el: any) => (
          <Card
            img={el.image}
            name={el.fullName}
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

export const SearchInputTeam = ({ data }: { data: any }) => {
  return (
    <div className="team__overview">
      {data && data.length > 0 ? (
        data.map((el: any) => (
          <Card
            img={el.image}
            name={el.fullName}
            role={el.role}
            id={el._id}
            key={el._id}
          />
        ))
      ) : (
        <div>
          <p>There are no lawyers for your search</p>
        </div>
      )}
    </div>
  );
};

export default AbujaTeam;
