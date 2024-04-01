import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/ad.jpg'
import img4 from '../assets/ae.jpg'
import img5 from '../assets/5.jpg'


const Home = () => {
  return (
    <Box>
<Mycarousel />

<Container maxW={'container.xl'} minH={'100vh'} p='16' >

    <Heading textTransform={'uppercase'} m={'auto'} w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>

    <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']} >

        <Image src={img5} filter={'hue-rotate(-50deg)'} h={['40','400']} />

        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis, officia deleniti odit magni ipsa tenetur similique voluptatem. Necessitatibus ducimus, cum dolores doloribus est suscipit. Illum quas magni ut rerum.
        </Text>
        
    </Stack>

</Container>
    </Box>
  )
}

const headingoption = {
    pos : 'absolute',
    left: '50%',
    top: '50%',
    p : '4',
    textTransform: 'uppercase',
    transform: 'translate(-50%, -50%)'
} 



const Mycarousel = () => {
return(
    <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false}> 

    <Box w='full' h='100vh'>
        <Image src={img1} />
        <Heading bgColor={'black'} color={'white'} {...headingoption} opacity={'0.4'}>Watch the Future</Heading>
    </Box>

    <Box w='full' h='100vh'>
        <Image src={img2} />
        <Heading bgColor={'black'} color={'white'} {...headingoption} opacity={'0.4'}>Watch the Future</Heading>
    </Box>

    <Box w='full' h='100vh'>
        <Image src={img3} />
        <Heading bgColor={'black'} color={'white'} {...headingoption} opacity={'0.4'}>Watch the Future</Heading>
    </Box>

    <Box w='full' h='100vh'>
        <Image src={img4} />
        <Heading bgColor={'black'} color={'white'} {...headingoption} opacity={'0.4'}>Watch the Future</Heading>
    </Box>



    </Carousel>
)
}

export default Home