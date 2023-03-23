import Head from 'next/head';
import TravelForm from '@/widgets/TravelForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plan your vacation with ChatGPT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TravelForm />
    </>
  );
}
