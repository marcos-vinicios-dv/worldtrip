import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TypeProps {
  icon: string;
  label: string;
}

export const Type = ({ icon, label }: TypeProps) => {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image
          src={`/images/${icon}.svg`}
          w="85px"
          h="85px"
          mb="6"
          alt="Ícone"
        />
      ) : (
        <Text color="yellow.500" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.500" fontSize={['md', 'xl', '2xl']}>
        {label}
      </Text>
    </Flex>
  );
};
