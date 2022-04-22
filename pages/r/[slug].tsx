import Head from 'next/head';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Referral = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next.js | OG test</title>
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6"
				/>
				<meta property="og:title" content="Referral [slug]" />
				<meta property="og:description" content="Open graph testing - nextjs" />
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Referral [slug]</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.tsx</code>
				</p>
			</main>
		</div>
	);
};

export default Referral;
