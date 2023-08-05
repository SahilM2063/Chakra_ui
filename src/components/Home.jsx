import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.svg';
import { transform } from 'framer-motion';

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} p={'16'} maxW={'container.xl'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          textAlign={'center'}
          p={'4'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['60', '400']} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cumque fuga corporis voluptatem, eligendi inventore minus dolorem accusamus aliquid eos veritatis assumenda voluptate tenetur explicabo nihil? Cumque dolore natus, voluptatibus nihil expedita, amet assumenda nobis reprehenderit officia quos fugiat consequuntur sit mollitia error ad dicta, officiis incidunt ipsam voluptatem! Recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum quasi ullam cupiditate sit sapiente m
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1500}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Technology In Your Hand
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'white'} color={'black'} {...headingOptions}>
          Social Media Is Power
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          AI Can Take Over The World
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Process With Your Mind
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
