import Head from 'next/head';
import TravelForm from '@/widgets/travel-form';
import HeaderApp from '@/widgets/header-app';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Plan your vacation with ChatGPT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderApp />
      <TravelForm />
    </>
  );
}

IndexPage.auth = {
  role: 'user',
};
