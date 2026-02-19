'use client'

import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
	{ label: 'Поступление 2026', href: '#admission' },
	{ label: 'О программе', href: '#program' },
	{ label: 'Специальности', href: '#specialties' }
]

const directions = [
	{
		code: '09.04.02',
		title: 'Информационные системы и технологии'
	},
	{
		code: '38.04.02',
		title: 'Менеджмент'
	}
]

const badges = [
	{ text: 'развитие', className: 'top-[48%] left-[2%] rotate-[7.59deg]' },
	{ text: 'быстрый старт', className: 'bottom-[20%] left-[30%]' },
	{ text: 'лёгкость', className: 'top-[48%] right-[10%] -rotate-[7.1deg]' }
]

const categories = [
	{ icon: '/icons/category-management.png', label: 'Управление' },
	{ icon: '/icons/category-ai.png', label: 'ИИ-технологии' },
	{ icon: '/icons/category-finance.png', label: 'Финансы' }
]

function CheckBadge({ text, className }: { text: string; className: string }) {
	return (
		<div
			className={`rounded-tag absolute z-20 flex items-center gap-1.5 bg-white px-2.5 py-1 shadow-md ${className}`}
		>
			<span className="bg-badge-bg flex size-6.5 shrink-0 items-center justify-center rounded-full">
				<Image
					src="/icons/check.svg"
					alt=""
					aria-hidden="true"
					width={26}
					height={26}
				/>
			</span>
			<span className="text-text-dark text-xl font-semibold tracking-tight">
				{text}
			</span>
		</div>
	)
}

function BurgerIcon({ open }: { open: boolean }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			{open ? (
				<>
					<line
						x1="4"
						y1="4"
						x2="20"
						y2="20"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<line
						x1="20"
						y1="4"
						x2="4"
						y2="20"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</>
			) : (
				<>
					<line
						x1="3"
						y1="6"
						x2="21"
						y2="6"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<line
						x1="3"
						y1="12"
						x2="21"
						y2="12"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<line
						x1="3"
						y1="18"
						x2="21"
						y2="18"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</>
			)}
		</svg>
	)
}

export default function HeroSection() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<section className="lg:p-hero-inset flex flex-col bg-white lg:h-svh lg:min-h-[700px]">
			<div className="rounded-card from-hero-to to-hero-from relative flex flex-1 flex-col overflow-hidden bg-linear-[237deg] max-lg:min-h-svh max-lg:rounded-none">
				<Image
					src="/images/binary.png"
					alt=""
					width={1054}
					height={662}
					className="pointer-events-none absolute top-0 right-0 z-0 h-full w-auto max-w-none select-none"
					aria-hidden="true"
					priority
				/>

				<Image
					src="/images/line-1.png"
					alt=""
					width={948}
					height={606}
					className="pointer-events-none absolute top-10 -right-2 z-0 select-none"
					aria-hidden="true"
				/>

				<nav className="relative z-20 flex flex-col">
					<div className="flex items-center justify-between px-4 pt-4 md:px-[36px] md:pt-6">
						<Image
							src="/icons/logo.svg"
							alt="Университет Косыгина"
							width={125}
							height={56}
							priority
						/>

						<div className="hidden items-center gap-2 md:flex">
							{navLinks.map(({ label, href }) => (
								<a
									key={href}
									href={href}
									className="px-2.5 py-2.5 text-base font-semibold tracking-tight text-white transition-colors hover:text-white/80"
								>
									{label}
								</a>
							))}
						</div>

						<button
							className="flex items-center justify-center p-2 md:hidden"
							aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
							aria-expanded={menuOpen}
							onClick={() => setMenuOpen(v => !v)}
						>
							<BurgerIcon open={menuOpen} />
						</button>
					</div>

					{menuOpen && (
						<div className="flex flex-col gap-1 px-4 pt-2 pb-3 md:hidden">
							{navLinks.map(({ label, href }) => (
								<a
									key={href}
									href={href}
									className="py-2 text-base font-semibold tracking-tight text-white transition-colors hover:text-white/80"
									onClick={() => setMenuOpen(false)}
								>
									{label}
								</a>
							))}
						</div>
					)}
				</nav>

				<div className="relative flex flex-1 flex-col gap-8 px-4 pt-8 pb-0 md:flex-row md:px-[36px] md:pt-10 lg:pt-16">
					<div className="relative z-20 flex flex-1 flex-col justify-around gap-6 pb-8 md:pb-10 lg:w-max lg:gap-0 lg:pb-16">
						<h1
							className="mb-6 bg-linear-to-tl from-white/60 via-white to-white/60 bg-clip-text text-center leading-tight font-semibold tracking-tight text-transparent md:mb-10 md:text-left lg:mb-12 lg:leading-none lg:text-nowrap"
							style={{ fontSize: 'var(--text-hero-title)' }}
						>
							Устойчивые продукты
							<br />
							онлайн-образования
						</h1>

						<div className="flex flex-col gap-4">
							{directions.map(({ code, title }) => (
								<div
									key={code}
									className="rounded-direction border border-white/20 bg-white/5 px-5 py-5 backdrop-blur-md lg:w-[320px]"
								>
									<div className="rounded-badge bg-purple mb-3 inline-block px-2.5 py-1">
										<span className="text-xl font-bold tracking-tight text-white">
											{code}
										</span>
									</div>
									<p className="text-xl font-medium tracking-tight whitespace-pre-line text-white">
										{title}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="hero-photo-col relative hidden flex-1 lg:block">
						<div
							className="glow-blue bg-blue-glow absolute bottom-0 left-[5%] h-[45%] w-[85%] opacity-60"
							aria-hidden="true"
						/>
						<div
							className="glow-purple bg-purple-dark absolute right-[-5%] bottom-0 h-[30%] w-[60%] opacity-70"
							aria-hidden="true"
						/>

						<div className="absolute right-[-7%] bottom-0 z-10 h-[90%]">
							<Image
								src="/images/hero-team.png"
								alt="Команда программы"
								width={795}
								height={530}
								className="z-50 h-full w-auto max-w-none"
								priority
							/>
							{badges.map(({ text, className }) => (
								<CheckBadge
									key={text}
									text={text}
									className={className}
								/>
							))}
						</div>
					</div>
				</div>

				<Image
					src="/images/line-2.png"
					alt=""
					width={1572}
					height={237}
					className="pointer-events-none absolute -bottom-1 w-screen select-none 2xl:right-0"
					style={{ zIndex: 15 }}
					aria-hidden="true"
				/>
			</div>

			<div className="mt-2 grid grid-cols-1 gap-2 lg:mt-4 lg:grid-cols-3 lg:gap-3">
				{categories.map(({ icon, label }) => (
					<div
						key={label}
						className="rounded-card bg-card-bg flex items-center gap-3 lg:gap-4"
					>
						<div className="size-category-icon flex shrink-0 items-center justify-center">
							<Image
								src={icon}
								alt={label}
								width={156}
								height={156}
								className="size-full object-contain"
							/>
						</div>
						<span
							className="text-text-dark font-medium tracking-tight"
							style={{ fontSize: 'var(--text-category-label)' }}
						>
							{label}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}
