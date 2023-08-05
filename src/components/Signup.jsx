import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'18'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          m={'auto'}
          w={['full', '96']}
          my={'16'}
          textAlign={'center'}
        >
          <Heading>Video HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
          <Input
            type={'text'}
            placeholder="Enter username"
            required
            focusBorderColor="purple"
          />
          <Input
            type={'email'}
            placeholder="Enter email"
            required
            focusBorderColor="purple"
          />
          <Input
            type={'password'}
            placeholder="Enter password"
            required
            focusBorderColor="purple"
          />

          <Button colorScheme="cyan" type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already have an account ?{' '}
            <Button
              variant={'link'}
              colorScheme={'cyan'}
              alignSelf={'flex-end'}
            >
              <Link to={'/login'}>Login now</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
