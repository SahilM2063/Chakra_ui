import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading>Welcome Back</Heading>
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
          <Button variant={'link'} colorScheme={'cyan'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>forget password ?</Link>
          </Button>

          <Button colorScheme="cyan" type="submit">
            Login
          </Button>

          <Text textAlign={'right'}>
            New user ?{' '}
            <Button
              variant={'link'}
              colorScheme={'cyan'}
              alignSelf={'flex-end'}
            >
              <Link to={'/signup'}>SignUp now</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
