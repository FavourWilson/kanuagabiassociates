import BounceLoader from "react-spinners/BounceLoader";

const IsLoading = ({ isLoading }: { isLoading: boolean | undefined }) => {
  return (
    <div className="isloading">
      <BounceLoader color={"#d2b202"} loading={isLoading} size={60} />
      <div className="isloading__message">
        <p>Kanuagabilegal</p>
      </div>
    </div>
  );
};

export default IsLoading;
