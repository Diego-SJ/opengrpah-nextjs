import { useRouter } from 'next/router';
import React from 'react';
import HeadSeo from '../../components/Seo';
import styles from '../../styles/Home.module.css';

const Referral = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<HeadSeo
				seo={{
					metaTitle: 'Referral',
					metaDescription: 'Referral - test',
					shareImage: `http://localhost:3000/api/og-image?age=${router?.query?.a}`
				}}
			/>

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
