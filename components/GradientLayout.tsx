import React from 'react';
import { Image } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';

export default function GradientLayout({ color, children, image, subtitle, title, description, roundImage }) {
  return (
    <Box
      height='100%'
      overflowY='auto'
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0,0, 0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding='40px' align='end'>
        <Box padding='20px'>
          <Image boxSize='160px' boxShadow='2xl' src={image} borderRadius={roundImage ? '100%' : '3px'} />
        </Box>
      </Flex>
    </Box>
  );
}
