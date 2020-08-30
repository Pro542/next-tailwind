import Head from 'next/head';

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Next Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-black-500 text-4xl">Nextjs</h1>
        <span className="text-green-500">tailwindcss</span>
	&nbsp;
        <span className="text-blue-500">typescript (coming soon)</span>
      </div>
    </div>
 );
}
