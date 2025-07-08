import {
	ArrowLeftRight,
	HandCoins,
	Landmark,
	PiggyBank,
	Plane,
	ShoppingCart,
	Ticket,
	UtensilsCrossed,
} from 'lucide-react';

export const sidebarLinks = [
	{
		imgURL: '/icons/home.svg',
		route: '/',
		label: 'Home',
	},
	{
		imgURL: '/icons/dollar-circle.svg',
		route: '/my-banks',
		label: 'My Banks',
	},
	{
		imgURL: '/icons/transaction.svg',
		route: '/transaction-history',
		label: 'Transaction History',
	},
	{
		imgURL: '/icons/money-send.svg',
		route: '/payment-transfer',
		label: 'Transfer Funds',
	},
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = '6627ed3d00267aa6fa3e';

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
	'access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63';

export const ITEMS = [
	{
		id: '6624c02e00367128945e', // appwrite item Id
		accessToken: 'access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548',
		itemId: 'VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm',
		userId: '6627ed3d00267aa6fa3e',
		accountId: 'X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ',
	},
	{
		id: '6627f07b00348f242ea9', // appwrite item Id
		accessToken: 'access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30',
		itemId: 'Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq',
		userId: '6627ed3d00267aa6fa3e',
		accountId: 'x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9',
	},
];

export const topCategoryStyles = {
	Shopping: {
		bg: 'bg-purple-50',
		circleBg: 'bg-purple-500',
		text: {
			main: 'text-gray-800',
			count: 'text-purple-700',
		},
		progress: {
			bg: 'bg-purple-200',
			indicator: 'bg-purple-500',
		},
		icon: ShoppingCart,
	},
	'Food and Drink': {
		bg: 'bg-orange-50',
		circleBg: 'bg-orange-500',
		text: {
			main: 'text-gray-800',
			count: 'text-orange-700',
		},
		progress: {
			bg: 'bg-orange-200',
			indicator: 'bg-orange-500',
		},
		icon: UtensilsCrossed,
	},
	Travel: {
		bg: 'bg-teal-50',
		circleBg: 'bg-teal-500',
		text: {
			main: 'text-gray-800',
			count: 'text-teal-700',
		},
		progress: {
			bg: 'bg-teal-200',
			indicator: 'bg-teal-500',
		},
		icon: Plane,
	},
	Entertainment: {
		bg: 'bg-pink-50',
		circleBg: 'bg-pink-500',
		text: {
			main: 'text-gray-800',
			count: 'text-pink-700',
		},
		progress: {
			bg: 'bg-pink-200',
			indicator: 'bg-pink-500',
		},
		icon: Ticket,
	},
	'Loan Payments': {
		bg: 'bg-yellow-50',
		circleBg: 'bg-yellow-500',
		text: {
			main: 'text-gray-800',
			count: 'text-yellow-700',
		},
		progress: {
			bg: 'bg-yellow-200',
			indicator: 'bg-yellow-500',
		},
		icon: Landmark,
	},
	Income: {
		bg: 'bg-green-50',
		circleBg: 'bg-green-500',
		text: {
			main: 'text-gray-800',
			count: 'text-green-700',
		},
		progress: {
			bg: 'bg-green-200',
			indicator: 'bg-green-500',
		},
		icon: PiggyBank,
	},
	Transfer: {
		bg: 'bg-slate-50',
		circleBg: 'bg-slate-500',
		text: {
			main: 'text-gray-800',
			count: 'text-slate-700',
		},
		progress: {
			bg: 'bg-slate-200',
			indicator: 'bg-slate-500',
		},
		icon: ArrowLeftRight,
	},
	Default: {
		bg: 'bg-slate-50',
		circleBg: 'bg-slate-500',
		text: {
			main: 'text-gray-800',
			count: 'text-slate-700',
		},
		progress: {
			bg: 'bg-slate-200',
			indicator: 'bg-slate-500',
		},
		icon: HandCoins,
	},
};

export const transactionCategoryStyles = {
	// SPENDING CATEGORIES
	Shopping: {
		borderColor: 'border-purple-500',
		backgroundColor: 'bg-purple-500',
		textColor: 'text-purple-700',
		chipBackgroundColor: 'bg-purple-100',
	},
	'Food and Drink': {
		borderColor: 'border-orange-500',
		backgroundColor: 'bg-orange-500',
		textColor: 'text-orange-700',
		chipBackgroundColor: 'bg-orange-100',
	},
	Travel: {
		borderColor: 'border-teal-500',
		backgroundColor: 'bg-teal-500',
		textColor: 'text-teal-700',
		chipBackgroundColor: 'bg-teal-100',
	},
	Transportation: {
		borderColor: 'border-blue-500',
		backgroundColor: 'bg-blue-500',
		textColor: 'text-blue-700',
		chipBackgroundColor: 'bg-blue-100',
	},
	Entertainment: {
		borderColor: 'border-pink-500',
		backgroundColor: 'bg-pink-500',
		textColor: 'text-pink-700',
		chipBackgroundColor: 'bg-pink-100',
	},

	// FINANCIAL PAYMENTS (Unified with Yellow)
	'Loan Payments': {
		borderColor: 'border-yellow-500',
		backgroundColor: 'bg-yellow-500',
		textColor: 'text-yellow-700',
		chipBackgroundColor: 'bg-yellow-100',
	},
	Payment: {
		borderColor: 'border-yellow-500',
		backgroundColor: 'bg-yellow-500',
		textColor: 'text-yellow-700',
		chipBackgroundColor: 'bg-yellow-100',
	},
	Rent: {
		borderColor: 'border-yellow-500',
		backgroundColor: 'bg-yellow-500',
		textColor: 'text-yellow-700',
		chipBackgroundColor: 'bg-yellow-100',
	},
	Income: {
		borderColor: 'border-green-500',
		backgroundColor: 'bg-green-500',
		textColor: 'text-green-700',
		chipBackgroundColor: 'bg-green-100',
	},
	Transfer: {
		borderColor: 'border-slate-500',
		backgroundColor: 'bg-slate-500',
		textColor: 'text-slate-700',
		chipBackgroundColor: 'bg-slate-100',
	},

	// 	// A safe, neutral default for any unmapped categories
	Default: {
		borderColor: 'border-slate-400',
		backgroundColor: 'bg-slate-400',
		textColor: 'text-slate-600',
		chipBackgroundColor: 'bg-slate-100',
	},
};

export const statusCategoryStyles = {
	Processing: {
		borderColor: 'border-blue-500',
		backgroundColor: 'bg-blue-500',
		textColor: 'text-blue-700',
		chipBackgroundColor: 'bg-blue-100',
	},
	Success: {
		borderColor: 'border-green-500',
		backgroundColor: 'bg-green-500',
		textColor: 'text-green-700',
		chipBackgroundColor: 'bg-green-100',
	},
	// Add other statuses like 'Pending' or 'Failed' here
};
