import { HeroNav } from '@/components/sections/hero/HeroNav'
import { HeroPhoto } from '@/components/sections/hero/HeroPhoto'
import Image from 'next/image'

interface HeroContentProps {
	onCtaClick: () => void
}

export function HeroContent({ onCtaClick }: HeroContentProps) {
	return (
		<div className="rounded-card from-hero-to to-hero-from relative flex flex-1 flex-col overflow-hidden bg-linear-[237deg] max-lg:rounded-none">
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

			<HeroNav />

			<div className="relative flex flex-1 flex-col gap-8 px-4 pt-8 pb-0 md:px-9 md:pt-10 lg:flex-row lg:pt-10">
				<div className="relative z-20 flex flex-1 flex-col justify-center pb-8 md:justify-start md:pt-12 md:pb-10 lg:w-max lg:justify-normal lg:pt-0 lg:pb-10 2xl:pb-16">
					<div className="flex flex-col gap-3 md:gap-6 lg:gap-0">
						<div>
							<p className="mb-2 text-center text-sm font-medium tracking-tight text-white md:mb-3 md:text-base lg:mb-4 lg:text-left">
								Магистерская программа
							</p>
							<h1 className="text-hero-title bg-linear-to-tl from-white/60 via-white to-white/60 bg-clip-text pb-1 text-center leading-tight font-semibold tracking-tight text-transparent antialiased md:mb-10 lg:mb-8 lg:text-left lg:leading-none 2xl:mb-12">
								Устойчивые продукты онлайн-образования: ИИ-технологии, финансы,
								управление
							</h1>
						</div>

						<button
							type="button"
							onClick={onCtaClick}
							className="btn-glass rounded-4xl bg-white/10 px-12 py-2.5 text-lg font-medium tracking-tight text-white backdrop-blur-lg transition-colors hover:bg-white/20 md:w-max md:py-3 md:text-xl xl:px-16 xl:py-4 xl:text-2xl"
						>
							Оставить заявку
						</button>
					</div>
				</div>

				<HeroPhoto />
			</div>

			<Image
				src="/images/line-2.png"
				alt=""
				width={1572}
				height={237}
				className="pointer-events-none absolute -bottom-1 z-15 w-screen select-none 2xl:right-0"
				aria-hidden="true"
			/>
		</div>
	)
}
