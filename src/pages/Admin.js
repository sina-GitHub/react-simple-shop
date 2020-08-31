import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Grid} from '@material-ui/core';

export default function Home() {
	const {t} = useTranslation();

	return (
		<Container style={{padding: '80px 0 50px 0'}}>
			<Grid item lg={12} md={6} xs={12}>
				<h1>{t('wip')}</h1>
			</Grid>
		</Container>
	);
}
