import GradientLayout from '../components/GradientLayout';

export default function Home() {
  return (
    <GradientLayout
      color='green'
      title='Gökhan Ünal'
      subtitle='Profile'
      description='15 Playlists'
      image='https://i.pinimg.com/originals/db/b0/f0/dbb0f0ede2520c4320bd909b360977a0.png'
      roundImage
    >
      <div>Home Page</div>
    </GradientLayout>
  );
}
