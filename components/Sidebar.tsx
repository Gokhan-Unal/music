import { Box } from '@chakra-ui/layout';
import React from 'react';
import NextImage from 'next/image';

export default function Sidebar() {
  return (
    <Box width='100%' height='calc(100% - 100px)' bg='black' padding='5px' color='gray'>
      <Box paddingY='20px'>
        <Box width='120px' marginBottom='20px' paddingX='20px'>
          <NextImage src='/logo.svg' height='60' width='120' />
        </Box>
      </Box>
    </Box>
  );
}
