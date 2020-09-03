import Head from 'next/head';
import ListItem from '../components/listItem';

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Next Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ListItem title="Nextjs" items={["tailwind", "typescript (coming soon)", "styled-components (coming soon)"]} />
        <ListItem title="Nextjs" items={["tailwind", "typescript (coming soon)", "styled-components (coming soon)"]} />
      </div>
    </div>
 );

}
