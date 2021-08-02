import { Box, Flex, Text } from '@chakra-ui/react';

interface BannerContinentProps {
  name: string;
  image: string;
}

export const BannerContinent = ({ name, image }: BannerContinentProps) => {
  return (
    <Flex
      w="100%"
      h={['150px', '350px', '350px', '500px']}
      align={['center', 'flex-end']}
      justify={['center', 'flex-start']}
      bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.2)"
    >
      <Box
        w="95%"
        maxW="1160px"
        mx="auto"
        textAlign={['center', 'left']}
        mb={['0', '14']}
      >
        <Text color="white" fontWeight="600" fontSize={['2xl', '4xl', '5xl']}>
          {name}
        </Text>
      </Box>
    </Flex>
  );
};
