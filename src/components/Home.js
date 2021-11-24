import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  Ul,
  HomeImg,
  Box,
  HomeLi,
  Details,
  Name,
  Deaths,
  Seperator,
  Button,
  ImgFluid,
  HeaderHome,
  HeaderLi,
} from '../style/Componentstyle';
import SearchForm from './SearchForm';
import { getSingleContinent } from '../redux/continents/continentsActions';
// Images
import Africa from '../Images/Africa.png';
import Asia from '../Images/Asia.png';
import Europe from '../Images/Europe.png';
import Australia from '../Images/Australia-Oceania.png';
import NorthAmerica from '../Images/North America.png';
import SouthAmerica from '../Images/South America.png';
import world from '../Images/world.png';

const Home = () => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continentsReducer.continents);
  const [searchContinent, setSearchContinent] = useState('');
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];
  const clearFilter = () => {
    setSearchContinent('');
  };
  return (
    <>
      <SearchForm setContinent={setSearchContinent} />
      <Ul>
        <HeaderHome>
          <HeaderLi>
            <HomeImg src={world} alt="World" data-testid="img" />
            <Details>
              <Name data-testid="continent">
                The whole world
              </Name>
              <Deaths>
                7231690 deaths
              </Deaths>
            </Details>
          </HeaderLi>
        </HeaderHome>
        <Seperator>States By Continent</Seperator>
        <Box>
          {
          searchContinent === ''
            ? continents.map((continent) => continentsShape.map((image) => (
              image.search(continent.name) !== -1
                ? (
                  <Fragment key={continent.name}>
                    <HomeLi>
                      <NavLink to="/details" onClick={() => dispatch(getSingleContinent(continent))}>
                        <BsArrowRightCircle />
                        <ImgFluid src={image} alt={continent.name} />
                        <Details>
                          <Name>
                            {continent.name}
                          </Name>
                          <Deaths>
                            {
                                `${continent.deaths} `
                            }
                          </Deaths>
                        </Details>
                      </NavLink>
                    </HomeLi>
                  </Fragment>
                )
                : null
            )))
            : continents.map((continent) => {
              if (continent.name === searchContinent) {
                return (
                  <>
                    <Button type="button" onClick={clearFilter} key="filter">
                      <BsArrowRightCircle />
                    </Button>
                    {
                      continentsShape.map((image) => (
                        image.search(continent.name) !== -1
                          ? (
                            <HomeLi key={continent.name}>
                              <NavLink
                                to="/details"
                                onClick={() => dispatch(getSingleContinent(continent))}
                              >
                                <BsArrowRightCircle />
                                <ImgFluid src={image} alt={continent.name} />
                                <Details>
                                  <Name>
                                    {continent.name}
                                  </Name>
                                  <Deaths>
                                    {
                                      `${continent.deaths} `
                                    }
                                  </Deaths>
                                </Details>
                              </NavLink>
                            </HomeLi>
                          )
                          : null
                      ))
                    }
                  </>
                );
              }
              return null;
            })
            }
        </Box>
      </Ul>
    </>
  );
};

export default Home;
