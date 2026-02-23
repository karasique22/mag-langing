'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { z } from 'zod'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

const MAX_MESSAGE_LENGTH = 500

const schema = z.object({
	name: z
		.string()
		.min(1, 'Введите ФИО')
		.refine(v => v.trim().split(/\s+/).length >= 2, 'Введите имя и фамилию'),
	phone: z
		.string()
		.refine(
			v => v.replace(/\D/g, '').length === 11,
			'Введите полный номер телефона'
		),
	email: z.string().min(1, 'Введите email').email('Некорректный email'),
	message: z
		.string()
		.max(MAX_MESSAGE_LENGTH, `Максимум ${MAX_MESSAGE_LENGTH} символов`)
})

type FormData = z.infer<typeof schema>

interface ApplicationFormProps {
	onSuccess: () => void
	onError?: (error: Error) => void
}

export function ApplicationForm({ onSuccess, onError }: ApplicationFormProps) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: { name: '', phone: '', email: '', message: '' }
	})

	const messageValue = useWatch({ control, name: 'message' })

	const onSubmit = async (data: FormData) => {
		try {
			if (!API_URL) {
				throw new Error('Сервер заявок не настроен')
			}

			const res = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (!res.ok) throw new Error('Ошибка отправки')

			onSuccess()
		} catch (err) {
			onError?.(err instanceof Error ? err : new Error('Ошибка отправки'))
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<Input
						{...register('name')}
						type="text"
						placeholder="ФИО *"
						aria-invalid={!!errors.name}
						className="rounded-xl border-gray-200 px-4 py-3 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
					/>
					{errors.name && (
						<p className="text-destructive text-xs">{errors.name.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-1">
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<IMaskInput
								{...field}
								mask="+7 (000) 000-00-00"
								placeholder="+7 (999) 999-99-99"
								inputRef={field.ref}
								onAccept={value => field.onChange(value)}
								className="placeholder:text-muted-foreground aria-invalid:border-destructive w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 text-sm transition-colors outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
								aria-invalid={!!errors.phone}
							/>
						)}
					/>
					{errors.phone && (
						<p className="text-destructive text-xs">{errors.phone.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-1">
					<Input
						{...register('email')}
						type="email"
						placeholder="Email *"
						aria-invalid={!!errors.email}
						className="rounded-xl border-gray-200 px-4 py-3 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
					/>
					{errors.email && (
						<p className="text-destructive text-xs">{errors.email.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-1">
					<Textarea
						{...register('message')}
						placeholder="Сообщение (необязательно)"
						rows={3}
						aria-invalid={!!errors.message}
						className="resize-none rounded-xl border-gray-200 px-4 py-3 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"
					/>
					<div className="flex justify-between">
						{errors.message && (
							<p className="text-destructive text-xs">
								{errors.message.message}
							</p>
						)}
						<span className="text-muted-foreground ml-auto text-xs">
							{messageValue.length}/{MAX_MESSAGE_LENGTH}
						</span>
					</div>
				</div>
			</div>

			<Button
				type="submit"
				size="lg"
				disabled={isSubmitting}
				className="mt-4 w-full rounded-xl bg-blue-600 hover:bg-blue-700"
			>
				{isSubmitting ? 'Отправляем...' : 'Отправить'}
			</Button>
		</form>
	)
}
