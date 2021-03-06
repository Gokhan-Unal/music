import { Image } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import GradientLayout from '../components/GradientLayout';
import prisma from '../lib/prisma';
import { useMe } from '../lib/hooks';

export default function Home({ artists }) {
  const { user } = useMe();
  return (
    <GradientLayout
      color='green'
      title={`${user?.firstName} ${user?.lastName}`}
      subtitle='Profile'
      description={`${user?.playlistCount} public playlists`}
      image='https://i.pinimg.com/originals/db/b0/f0/dbb0f0ede2520c4320bd909b360977a0.png'
      roundImage
    >
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text>Top artist this month</Text>
          <Text>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist, i) => (
            <Box key={i} paddingX='10px' paddingStart='0' width='20%'>
              <Box bg='gray.900' borderRadius='4px' padding='15px' width='100%'>
                <Image src='http://placekitten.com/g/300/300' borderRadius='100%' />
                <Box marginTop='10px'>
                  <Text fontSize='large'>{artist.name}</Text>
                  <Text fontSize='x-small'>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: {
      artists,
    },
  };
};
