import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="cyan"
        pos={'fixed'}
        left={4}
        top={4}
        p={'0'}
        h={'10'}
        w={'10'}
        zIndex={'overlay'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Videos HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'ghost'} colorScheme="cyan" onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="cyan" onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="cyan" onClick={onClose}>
                <Link to={'/videos?category=fre'}>Free Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="cyan" onClick={onClose}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme="purple" onClick={onClose}>
                <Link to={'/login'}>Sign In</Link>
              </Button>
              <Button colorScheme="purple" variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
