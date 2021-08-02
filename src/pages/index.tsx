import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { BannerHome } from '../components/Banners/BannerHome';

import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <BannerHome />

        <TravelTypes />

        <Divider />

        <Heading
          textAlign="center"
          color="gray.500"
          fontWeight="500"
          mb={['5', '14']}
          fontSize={['lg', '3xl', '4xl']}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
    </>
  );
}
