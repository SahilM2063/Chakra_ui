import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <Box bgColor={'blackAlpha.900'} p={'16'} minH={'40'} color={'white'}>
        <Stack direction={['column', 'row']} gap={['12', '0']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
              size={'md'}
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe For More
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                variant={'ghost'}
                colorScheme={'cyan'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video HUb
            </Heading>
            <Text>@All Rights Reserved 2023-2033</Text>
          </VStack>

          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button colorScheme="white" variant={'link'}>
              <AiFillYoutube />
              <a href="https://youtube.com">Youtube</a>
            </Button>
            <Button colorScheme="white" variant={'link'}>
              <AiFillTwitterSquare />
              <a href="https://twitter.com">Twitter</a>
            </Button>
            <Button colorScheme="white" variant={'link'}>
              <AiFillInstagram />
              <a href="https://instagram.com">Instagram</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
