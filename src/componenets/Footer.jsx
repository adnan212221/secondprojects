import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <Box bgColor={'black'} minH={'40'} p={'16'} color={'white'} >

        <Stack direction={['column', 'row']} >

            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']} >Newsletter Subscription</Heading>

                <HStack>
                    <Input placeholder='enter email here....' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                    <Button p={'0'} variant={'ghost'}  borderRadius={'0 20px 20px 0'} >
                        <AiOutlineSend />
                    </Button>
                </HStack>

            </VStack>

            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} alignItems={'center'} > Musically </Heading>
                <Text>All Rights are Reserved</Text>
            
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social media
                </Heading>
                <HStack>
                <Button variant={'link'}  ><a href="https://www.linkedin.com/in/adnan-sheikh-917b17209/" target={'_blank'}><FaLinkedin /></a></Button>
                <Button variant={'link'}  ><a href="https://www.github.com/adnan212221" target={'_blank'}><FaGithub  /></a></Button>
                <Button variant={'link'}  ><a href="https://www.instagram.com/ad_nan_s" target={'_blank'}><TiSocialInstagram /></a></Button>
                </HStack>
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer