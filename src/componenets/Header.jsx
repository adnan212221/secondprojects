import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Button, useDisclosure, VStack, HStack
  } from '@chakra-ui/react'
  import { RiMenu3Line } from "react-icons/ri";
  import { Link } from 'react-router-dom'
  import '../styles/Header.scss'

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
    <Button pos={'fixed'} top={'4'} left={'4'} className='menuicon' color={'white'} borderRadius={'full'} h={'10'} w={'10'} p={'3'} onClick={onOpen} zIndex={'overlay'}>
    <RiMenu3Line size={'20'} /> 
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>

        <DrawerOverlay />

        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                Musically
            </DrawerHeader>

            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button color={'darkred'} backgroundColor={'transparent'} onClick={onClose}>
                        <Link to={'/'}>Home</Link>
                    </Button>

                    <Button color={'darkred'} backgroundColor={'transparent'} onClick={onClose}>
                        <Link to={'/videos'}> Free Videos</Link>
                    </Button>

                    
        

                    <Button color={'darkred'} backgroundColor={'transparent'} onClick={onClose}>
                        <Link to={'/upload'}>Upload video</Link>
                    </Button>
                </VStack>

                <HStack position={'absolute'} bottom={'20'} right={'1'} w={'full'} justifyContent={'space-evenly'}>
                    <Button className='btnclr' color={'white'} onClick={onClose}>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                    <Button className='btnclr' color={'white'} onClick={onClose}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
        
    </Drawer>
    
    </>
  )
}

export default Header