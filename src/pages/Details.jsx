import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectAllDetails } from "../store/countryDetails/countrySelector";
import { useEffect } from "react";
import {
  loadCountryByName,
  setClear,
} from "../store/countryDetails/countryAction";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { setCountry, error, status } = useSelector(selectAllDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(setClear());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {setCountry && <Info push={navigate} {...setCountry} />}
    </div>
  );
};
