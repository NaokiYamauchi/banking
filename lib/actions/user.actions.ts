'use server';

import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../appwrite';
import { parseStringify } from '../utils';

export const signIn = async ({ email, password }: signInProps) => {
	try {
		const { account } = await createAdminClient();

		const session = await account.createEmailPasswordSession(
			email,
			password
		);

		cookies().set('appwrite-session', session.secret, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
		});

		return parseStringify(session);
	} catch (error) {
		console.log('Error', error);
	}
};

export const signUp = async (userData: SignUpParams) => {
	const { email, password, firstName, lastName } = userData;
	try {
		const { account } = await createAdminClient();

		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			`${firstName} ${lastName}`
		);

		const session = await account.createEmailPasswordSession(
			email,
			password
		);

		cookies().set('appwrite-session', session.secret, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
		});

		return parseStringify(newUserAccount);
	} catch (error) {
		console.log('Error', error);
	}
};

export async function getLoggedInUser() {
	try {
		const cookieStore = cookies();
		const session = cookieStore.get('appwrite-session');

		if (!session || !session.value) {
			throw new Error('No session');
		}

		const { account } = await createSessionClient(session.value);
		const user = await account.get();
		return parseStringify(user);
	} catch (error) {
		console.log('Error', error);
		return null;
	}
}

export const logoutAccount = async () => {
	try {
		const cookieStore = cookies();
		const session = cookieStore.get('appwrite-session');

		if (!session || !session.value) {
			throw new Error('No session to logout');
		}

		const { account } = await createSessionClient(session.value);

		await account.deleteSession('current');
		cookies().delete('appwrite-session');
	} catch (error) {
		console.error('Error logging out:', error);
	}
};
