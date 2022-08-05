import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountriesInfo,
  selectAllCountries,
} from "../store/countries/countiresSelectors";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { loadCountries } from "../store/countries/countriesAction";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(selectAllCountries);
  const { error, status, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />

      <List>
        {countries.map((c) => {
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
