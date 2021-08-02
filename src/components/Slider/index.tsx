import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Link from 'next/link';

import { api } from '../../services/api';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const Slider = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    async function load() {
      const data = (await api.get('/continents')).data;

      console.log(data);

      setContinents(
        data.map((continent) => {
          return {
            name: continent.name,
            image_url: continent.images[0],
            excerpt: continent.excerpt,
          };
        })
      );
    }
    load();
  }, []);

  return (
    <Flex
      w="100%"
      maxWidth={1240}
      mb={['5', '10']}
      mx="auto"
      h={['250px', '450px']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((cont) => (
          <SwiperSlide key={cont.name}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              direction="column"
              justify="center"
              bgImage={`url(${cont.image_url})`}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              textAlign="center"
              boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.5)"
            >
              <Link href={`/continents/${cont.name}`}>
                <a>
                  <Heading
                    fontSize={['3xl', '4xl', '5xl']}
                    color="white"
                    fontWeight="bold"
                  >
                    {cont.name}
                  </Heading>
                  <Text
                    color="gray.100"
                    fontWeight="bold"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {cont.excerpt}
                  </Text>
                  <Box />
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
