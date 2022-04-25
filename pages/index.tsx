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
					<Link href="/api/og-image?age=10" passHref>
						<a>
							<h2>OG API</h2>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
