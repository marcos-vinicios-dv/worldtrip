import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CityProps {
  city: string;
  city_image: string;
  country: string;
  country_flag: string;
}

export const CityCard = ({
  city,
  city_image,
  country,
  country_flag,
}: CityProps) => {
  return (
    <Flex direction="column" w="256px">
      <Image
        src={city_image}
        alt="Imagem do pais"
        w="100%"
        h="176px"
        borderRadius="4px 4px 0 0"
      />

      <Flex
        flex="1"
        p={['6']}
        align="center"
        justify="space-between"
        borderRadius="0 0 4px 4px "
        border="1px solid rgba(255, 186, 8, 0.5)"
        borderTop="0px"
      >
        <Box>
          <Heading color="gray.500" fontSize="xl">
            {city}
          </Heading>
          <Text color="gray.300" fontSize="md" pt="3">
            {country}
          </Text>
        </Box>

        <Box
          bgImage={`url(${country_flag})`}
          bgSize="cover"
          bgPosition="center"
          w="30px"
          h="30px"
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
};
