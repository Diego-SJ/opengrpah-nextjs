import React from 'react';
import HeadSeo from '../../components/Seo';
import styles from '../../styles/Home.module.css';

const Referral = () => {
	return (
		<div className={styles.container}>
			<HeadSeo
				seo={{
					metaTitle: 'Referral',
					metaDescription: 'Referral - test',
					shareImage:
						'https://firebasestorage.googleapis.com/v0/b/zenda-186015.appspot.com/o/cms%2Fzendala%20landscape.png?alt=media&token=af50885a-7b33-474f-8a5f-15a114cf55f6'
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
