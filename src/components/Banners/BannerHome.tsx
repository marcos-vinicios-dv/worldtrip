import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const BannerHome = () => {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url(/images/background.png)"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="95%"
        maxWidth={1240}
        mx="auto"
      >
        <Box>
          <Heading
            color="white"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
            fontWeight="500"
          >
            6 continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text
            color="gray.100"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/images/airplane.svg"
          alt="Avião amarelo sobrevoando a página"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8px"
        />
      </Flex>
    </Flex>
  );
};
