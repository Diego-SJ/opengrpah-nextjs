import type { NextPage } from 'next';
import Link from 'next/link';
import HeadSeo from '../components/Seo';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<HeadSeo
				seo={{
					metaTitle: 'Home',
					metaDescription: 'Home - test',
					shareImage:
						'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
				}}
			/>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.tsx</code>
				</p>

				<div className={styles.grid}>
					<Link href="/hello">
						<a className={styles.card}>
							<h2>Helllo</h2>
						</a>
					</Link>

					<Link href="/r/diego">
						<a href="https://nextjs.org/learn" className={styles.card}>
							<h2>Referral</h2>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
