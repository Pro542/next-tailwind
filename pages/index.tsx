import Head from 'next/head';
import ListItem from '../components/listItem';

function Home() {
  return (
    <div> 
      <Head>
        <title>Next Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ListItem title="Nextjs" items={["tailwind", "typescript", "grids (coming soon)"]} />
        <ListItem title="Nextjs" items={["tailwind", "typescript", "grids (coming soon)"]} />
      </div>
    </div>
 );

}

export default Home;