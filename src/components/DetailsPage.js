import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  Ul,
  Details,
  Seperator,
  Deaths,
  Img,
  Li,
  DetailsEmpty,
  CountryName,
} from '../style/Componentstyle';

//* * importing images */
import Africa from '../Images/Africa.png';
import Asia from '../Images/Asia.png';
import Europe from '../Images/Europe.png';
import Australia from '../Images/Australia-Oceania.png';
import NorthAmerica from '../Images/North America.png';
import SouthAmerica from '../Images/South America.png';

const DetailsPage = () => {
  const continent = useSelector((state) => state.continentsReducer.continent);
  const countries = useSelector((state) => state.countriesReducer.countries);
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];
  return (
    <Ul>
      {
        continent.name === undefined
          ? (
            <DetailsEmpty>
              There is no continent choosen
              <NavLink to="/">
                Home
              </NavLink>
            </DetailsEmpty>
          )
          : continentsShape.map((image) => (
            image.search(continent.name) !== -1
              ? (
                <Fragment key={continent.name}>
                  <Li>
                    <Img src={image} alt={continent.name} />
                    <Details>
                      <CountryName>
                        {continent.name}
                      </CountryName>
                      <Deaths>
                        {
                      `${continent.deaths} `
                    }
                        deaths
                      </Deaths>
                    </Details>
                  </Li>
                  <Seperator>
                    Country Breakdown
                  </Seperator>
                </Fragment>
              )
              : null
          ))

      }
      {
        countries.map((country) => (country.continent === continent.name
          ? (
            <Fragment key={country.id}>
              <Li id={country.id}>
                <CountryName>
                  {country.name}
                </CountryName>
                <Deaths>
                  {
                      `${country.deaths} `
                    }
                  deaths
                </Deaths>
                <BsArrowRightCircle />
              </Li>
            </Fragment>
          )

          : null))
      }
    </Ul>
  );
};

export default DetailsPage;
