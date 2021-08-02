import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/Banners/BannerContinet';
import { Characteristics } from '../../components/Characteristics';
import { Cities } from '../../components/Cities';
// import { City } from '../../components/Cities';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

type Cities = {
  city_id: number;
  name: string;
  city_image: string;
  country: string;
  country_flag: string;
};

interface ContinentData {
  name: string;
  info: string;
  images: string[];
  countries: number;
  languages: number;
  cities_100: Cities[];
}
interface ContinentProps {
  continent: ContinentData;
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <>
      <Head>
        <title>{continent.name} | worldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <BannerContinent name={continent.name} image={continent.images[1]} />

        <Flex
          w="95%"
          maxW="1160px"
          mx="auto"
          align="center"
          pt={['6', '10', '20']}
          direction={['column', 'column', 'column', 'row']}
        >
          <Box maxW="600px">
            <Text
              fontWeight="400"
              fontSize={['md', 'xl', '2xl']}
              color="gray.500"
              textAlign="justify"
              pr={['0', '0', '0', '70px']}
              pb={['4', '4', '4', '0']}
            >
              {continent.info}
            </Text>
          </Box>

          <Characteristics
            countries={continent.countries}
            languages={continent.languages}
            cities_100={continent.cities_100?.length}
          />
        </Flex>

        <Cities cities_100={continent.cities_100} />
      </Flex>
    </>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const data = (await api.get<ContinentData[]>('/continents')).data;

  const continent: ContinentData = data.find(({ name }) => name === slug);
  return {
    props: {
      continent,
    },
  };
};
