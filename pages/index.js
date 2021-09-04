import Head from 'next/head'

export const Home = () => {
  return (
    <div className="p-10">
			<Head>
				<title>Data List</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <div>
        <h1>Next.js News App</h1>

        <h3>News articles</h3>
      </div>
    </div>
  );
}

export default Home;