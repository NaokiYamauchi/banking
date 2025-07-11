import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { statusCategoryStyles, transactionCategoryStyles } from '@/constants';
import {
	cn,
	formatAmount,
	formatDateTime,
	getTransactionStatus,
	removeSpecialCharacters,
} from '@/lib/utils';

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
	const categoryMap: {
		[key: string]: keyof typeof transactionCategoryStyles;
	} = {
		FOOD_AND_DRINK: 'Food and Drink',
		SHOPS: 'Shopping',
		GENERAL_MERCHANDISE: 'Shopping',
		TRAVEL: 'Travel',
		TRANSPORTATION: 'Travel',
		TRANSFER_IN: 'Transfer',
		TRANSFER_OUT: 'Transfer',
		INCOME: 'Transfer',
		Transfer: 'Transfer',
		LOAN_PAYMENTS: 'Payment',
		BANK_FEES: 'Payment',
		RENT: 'Rent',
		ENTERTAINMENT: 'Entertainment',
	};

	// Find the style key from our map, or fall back to 'Default'.
	const styleKey = categoryMap[category] || 'Default';

	const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
		transactionCategoryStyles[styleKey];

	// Format the raw category from Plaid for better readability in the UI.
	// Example: 'FOOD_AND_DRINK' becomes 'Food and Drink'.
	const formattedCategory = category
		.replace(/_/g, ' ')
		.replace(/\b\w/g, (l) => l.toUpperCase());

	return (
		<div className={cn('category-badge', borderColor, chipBackgroundColor)}>
			<div className={cn('size-2 rounded-full', backgroundColor)} />
			<p className={cn('text-[12px] font-medium', textColor)}>
				{formattedCategory}
			</p>
		</div>
	);
};

export const StatusBadge = ({ status }: { status: string }) => {
	const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
		statusCategoryStyles[status as keyof typeof statusCategoryStyles] ||
		transactionCategoryStyles.Default;

	return (
		<div className={cn('category-badge', borderColor, chipBackgroundColor)}>
			<div className={cn('size-2 rounded-full', backgroundColor)} />
			<p className={cn('text-[12px] font-medium', textColor)}>{status}</p>
		</div>
	);
};

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
	return (
		<Table>
			<TableHeader className="bg-[#f9fafb]">
				<TableRow>
					<TableHead className="px-2">Transaction</TableHead>
					<TableHead className="px-2">Amount</TableHead>
					<TableHead className="px-2">Status</TableHead>
					<TableHead className="px-2">Date</TableHead>
					<TableHead className="px-2 max-md:hidden">
						Channel
					</TableHead>
					<TableHead className="px-2 max-md:hidden">
						Category
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((t: Transaction) => {
					const status = getTransactionStatus(new Date(t.date));
					const amount = formatAmount(t.amount);

					const isDebit = t.type === 'debit';
					const isCredit = t.type === 'credit';

					return (
						<TableRow
							key={t.id}
							className={`${
								isDebit || amount[0] === '-'
									? 'bg-[#FFFBFA]'
									: 'bg-[#F6FEF9]'
							} hover:bg-none border-b`}
						>
							<TableCell className="max-w-[250px] pl-2 pr-10">
								<div className="flex items-center gap-3">
									<h1 className="text-14 truncate font-semibold text-[#344054]">
										{removeSpecialCharacters(t.name)}
									</h1>
								</div>
							</TableCell>

							<TableCell
								className={`pl-2 pr-10 font-semibold ${
									isDebit || amount[0] === '-'
										? 'text-[#f04438]'
										: 'text-[#039855]'
								}`}
							>
								{isDebit
									? `-${amount}`
									: isCredit
									? amount
									: amount}
							</TableCell>

							<TableCell className="pl-2 pr-10">
								<StatusBadge status={status} />
							</TableCell>

							<TableCell className="min-w-32 pl-2 pr-10">
								{formatDateTime(new Date(t.date)).dateTime}
							</TableCell>

							<TableCell className="pl-2 pr-10 capitalize min-w-24">
								{t.paymentChannel}
							</TableCell>

							<TableCell className="pl-2 pr-10 max-md:hidden">
								<CategoryBadge category={t.category} />
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default TransactionsTable;
