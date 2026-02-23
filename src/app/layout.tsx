import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from 'sonner'

import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic']
})

const SITE_URL = 'https://онлайнпродукты.рф'

export const metadata: Metadata = {
	title:
		'Магистерская программа «Устойчивые продукты онлайн-образования» | Университет Косыгина',
	description:
		'Магистерская программа по направлениям «Информационные системы и технологии» и «Менеджмент». ИИ-технологии, финансы, управление. Бюджетные места, 2 квалификации.',
	keywords: [
		'магистратура',
		'университет Косыгина',
		'онлайн-образование',
		'информационные системы',
		'менеджмент',
		'ИИ-технологии',
		'бюджетные места',
		'поступление 2026'
	],
	metadataBase: new URL(SITE_URL),
	alternates: { canonical: '/' },
	openGraph: {
		title: 'Магистерская программа | Университет Косыгина',
		description:
			'Устойчивые продукты онлайн-образования: ИИ-технологии, финансы, управление. 2 квалификации, бюджетные места.',
		url: SITE_URL,
		siteName: 'Онлайн-продукты',
		locale: 'ru_RU',
		type: 'website'
	},
	twitter: {
		card: 'summary',
		title: 'Магистерская программа | Университет Косыгина',
		description:
			'Устойчивые продукты онлайн-образования: ИИ-технологии, финансы, управление. 2 квалификации, бюджетные места.'
	},
	robots: {
		index: true,
		follow: true
	}
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'EducationalOrganization',
			'@id': `${SITE_URL}/#organization`,
			name: 'Университет Косыгина',
			url: SITE_URL,
			description:
				'Российский государственный университет им. А.Н. Косыгина (Технологии. Дизайн. Искусство)',
			sameAs: ['https://www.kosygin-rgu.ru']
		},
		{
			'@type': 'Course',
			name: 'Устойчивые продукты онлайн-образования',
			description:
				'Магистерская программа по направлениям «Информационные системы и технологии» и «Менеджмент». ИИ-технологии, финансы, управление. Бюджетные места, 2 квалификации.',
			url: SITE_URL,
			inLanguage: 'ru',
			provider: {
				'@id': `${SITE_URL}/#organization`
			},
			educationalLevel: 'Магистратура',
			teaches: ['ИИ-технологии', 'Финансы', 'Управление онлайн-образованием'],
			availableLanguage: 'ru',
			offers: {
				'@type': 'Offer',
				category: 'Бюджетные и платные места',
				priceCurrency: 'RUB'
			}
		}
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<head>
				<Script
					id="json-ld"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
				<Toaster
					position="bottom-center"
					toastOptions={{ style: { fontSize: '16px' } }}
					richColors
				/>
			</body>
		</html>
	)
}
