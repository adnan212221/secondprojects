import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Musically</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'red'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'red'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'red'}
            />
  
            <Button colorScheme={'purple'} color={'white'} className='btnclr' type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'white'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;