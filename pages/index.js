/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>HackVis 360</title>
        <meta name="description" content="" />
        <meta name="keywords" />
      </Head>
      <Video />
      <HomeAbout />
      <TechStack />
    </Screen>
  );
}
