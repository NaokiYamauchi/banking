import { topCategoryStyles } from '@/constants';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';

const Category = ({ category }: CategoryProps) => {
	const categoryMap = {
		FOOD_AND_DRINK: 'Food and Drink',
		GENERAL_MERCHANDISE: 'Shopping',
		TRANSPORTATION: 'Travel',
		TRAVEL: 'Travel',
		TRANSFER_IN: 'Transfer',
		TRANSFER_OUT: 'Transfer',
		LOAN_PAYMENTS: 'Loan Payments',
		INCOME: 'Income',
		Transfer: 'Transfer', // Handles cases where the name is already clean
	};

	const styleKey =
		categoryMap[category.name as keyof typeof categoryMap] || 'Default';

	const {
		bg,
		circleBg,
		text: { main, count },
		progress: { bg: progressBg, indicator },
		icon: Icon,
	} = topCategoryStyles[styleKey as keyof typeof topCategoryStyles] ||
	topCategoryStyles.Default;

	const formattedName = category.name
		.replace(/_/g, ' ')
		.replace(/\b\w/g, (l) => l.toUpperCase());

	return (
		<div
			className={cn(
				'flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md',
				bg
			)}
		>
			<figure
				className={cn(
					'flex-shrink-0 flex-center size-12 rounded-full shadow-sm',
					circleBg
				)}
			>
				<Icon className={cn('size-5', indicator)} />
			</figure>
			<div className="flex w-full flex-1 flex-col gap-1">
				<div className="flex items-baseline justify-between">
					<h2 className={cn('font-semibold text-base', main)}>
						{formattedName}
					</h2>
					<p className={cn('font-medium text-sm', count)}>
						{category.count}
					</p>
				</div>
				<Progress
					value={
						category.totalCount > 0
							? (category.count / category.totalCount) * 100
							: 0
					}
					className={cn('h-2 w-full', progressBg)}
					indicatorClassName={cn('h-2 w-full', indicator)}
				/>
			</div>
		</div>
	);
};

export default Category;
