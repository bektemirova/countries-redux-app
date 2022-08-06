import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/countries/countriesSelectors";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { loadCountries } from "../store/countries/countriesAction";
import { selectControls } from "../store/controller/controllerSelector";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { error, status, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />
      {error && <h1>Something went wrong...</h1>}
      {status === "loading" && <h1>Loading...</h1>}
      <List>
        {status === "received" &&
          countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
      </List>
    </>
  );
};
