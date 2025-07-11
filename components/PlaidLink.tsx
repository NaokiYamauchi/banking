import {
	createLinkToken,
	exchangePublicToken,
} from '@/lib/actions/user.actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import {
	PlaidLinkOnSuccess,
	PlaidLinkOptions,
	usePlaidLink,
} from 'react-plaid-link';
import { Button } from './ui/button';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
	const router = useRouter();

	const [token, setToken] = useState('');

	useEffect(() => {
		const getLinkToken = async () => {
			const data = await createLinkToken(user);

			setToken(data?.linkToken);
		};

		getLinkToken();
	}, [user]);

	const onSuccess = useCallback<PlaidLinkOnSuccess>(
		async (public_token: string) => {
			await exchangePublicToken({ publicToken: public_token, user });

			router.push('/');
		},
		[user]
	);
	const config: PlaidLinkOptions = { token, onSuccess };

	const { open, ready } = usePlaidLink(config);

	return (
		<>
			{variant === 'primary' ? (
				<Button
					onClick={() => open()}
					disabled={!ready}
					className="plaidlink-primary"
				>
					<p className="text-[16px] font-semibold text-white max-xl:hidden">
						Connect bank
					</p>
				</Button>
			) : variant === 'ghost' ? (
				<Button
					onClick={() => open()}
					variant="ghost"
					className="plaidlink-ghost"
				>
					<Image
						src="/icons/connect-bank.svg"
						alt="connect bank"
						width={24}
						height={24}
					/>
					<p className="text-[16px] font-semibold text-black-2 max-xl:hidden">
						Connect bank
					</p>
				</Button>
			) : (
				<button onClick={() => open()} className="sidebar-link">
					<Image
						src="/icons/connect-bank.svg"
						alt="connect bank"
						width={24}
						height={24}
					/>
					<p className="sidebar-label">Connect Bank</p>
				</button>
			)}
		</>
	);
};

export default PlaidLink;
