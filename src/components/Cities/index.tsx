import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { CityCard } from './CityCard';

type City = {
  city_id: number;
  name: string;
  city_image: string;
  country: string;
  country_flag: string;
};

interface CitiesProps {
  cities_100: City[];
}

export const Cities = ({ cities_100 }: CitiesProps) => {
  return (
    <Flex
      w="95%"
      maxW="1160px"
      pt={['8', '20']}
      mx="auto"
      direction="column"
      pb="9"
    >
      <Heading
        color="gray.500"
        fontWeight="500"
        fontSize={['xl', '3xl', '4xl']}
        pb={['5', '10']}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        w="100%"
        minChildWidth="256px"
        spacing={5}
        justifyItems={['center', 'center', 'flex-start']}
      >
        {cities_100.map(
          ({ city_id, city_image, country, country_flag, name }) => (
            <CityCard
              key={city_id}
              city={name}
              city_image={city_image}
              country={country}
              country_flag={country_flag}
            />
          )
        )}
      </SimpleGrid>
    </Flex>
  );
};
