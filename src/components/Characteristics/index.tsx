import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Characteristic } from './Characteristic';

interface CharacteristicsProps {
  countries: number;
  languages: number;
  cities_100: number;
}

export const Characteristics = ({
  countries,
  languages,
  cities_100,
}: CharacteristicsProps) => {
  return (
    <Flex w={['343px', '380px', '490px']} justify="space-between">
      <Characteristic label="países">{countries}</Characteristic>
      <Characteristic label="línguas">{languages}</Characteristic>
      <Characteristic label="cidades +100" info>
        {cities_100}
      </Characteristic>
    </Flex>
  );
};
