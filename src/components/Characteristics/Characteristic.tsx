import { Box, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CharacteristicProps {
  children: ReactNode;
  label: string;
  info?: boolean;
}

export const Characteristic = ({
  children,
  label,
  info,
}: CharacteristicProps) => {
  return (
    <Box textAlign="center">
      <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow.500">
        {children}
      </Heading>
      <Flex as="span">
        <Text
          color="gray.500"
          fontSize={['xl', '2xl']}
          fontWeight={['400', '600']}
        >
          {label}
        </Text>
        {info && (
          <Tooltip
            hasArrow
            label="Cidades mais visitadas no mundo"
            bg="gray.100"
            color="gray.500"
          >
            <Image src="/images/info.svg" alt="Ícone mais informações" ml="1" />
          </Tooltip>
        )}
      </Flex>
    </Box>
  );
};
