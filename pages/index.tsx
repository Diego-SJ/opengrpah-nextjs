import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeadSeo from '../components/Seo';

const Home: NextPage = () => {
	const router = useRouter();
	return (
		<div>
			<HeadSeo
				seo={{
					metaTitle: 'Home',
					metaDescription: 'Home - test',
					shareImage: `http://localhost:3000/api/og-image?age=${router?.query?.a}`
				}}
			/>

			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<div>
					<Link href="/hello" passHref>
						<h2>Helllo</h2>
					</Link>

					<Link href="/r" passHref>
						<h2>Referral</h2>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
