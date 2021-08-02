import { Flex, Grid, Image, Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();
  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      align="center"
      justify="center"
      px="1rem"
    >
      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        {router.asPath !== '/' && (
          <Link href="/" passHref>
            <ChakraLink w={['16px', '30px']} h={['16px', '30px']}>
              <Image
                src="/images/arrowLeft.svg"
                alt="Voltar"
                w={['15px', '20px']}
                h={['10px', '16px']}
                mx="auto"
                mt="2"
              />
            </ChakraLink>
          </Link>
        )}
        <Image
          src="/logo.svg"
          alt="logo"
          w={['81px', '184px']}
          gridColumn="2"
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
};
