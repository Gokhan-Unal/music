import { useRouter } from 'next/router';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import NextImage from 'next/image';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push('/');
  };

  return (
    <Box height='100vh' bg='black' color='white'>
      <Flex justify='center' align='center' height='100px' borderBottom='1px solid white'>
        <NextImage src='/logo.svg' height='60' width='120' />
      </Flex>
      <Flex justify='center' align='center' height='calc(100vh - 100px)'>
        <Box padding='50px' bg='gray.900' borderRadius='6px'>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder='Email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                marginBottom: '1rem',
              }}
            />
            <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
            <Button
              type='submit'
              bg='green.500'
              sx={{
                '&:hover': {
                  bg: 'green.400',
                },
                marginTop: '1rem',
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
