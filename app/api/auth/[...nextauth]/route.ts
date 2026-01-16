import NextAuth, {type NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/app/lib/db";
import { eq } from "drizzle-orm"
import {users, accounts, sessions, verificationTokens} from "@/app/lib/db/schema"
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
// @ts-expect-error — DrizzleAdapter MySQL typing mismatch (runtime safe)
	adapter: DrizzleAdapter(db, {
		usersTable: users,
		accountsTable: accounts,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens
	}),
  providers: [
	CredentialsProvider({
		name: 'Credentails',
		credentials: {
			email: {label: 'Email', type: 'email', placeholder: 'Email'},
			password: {label: 'Password', type: 'password', placeholder: 'Password'}
		},
		async authorize(credentails, req) {
			if (!credentails?.email || !credentails?.password) return null

			const userResult = await db.select().from(users).where(eq(users.email, credentails.email));

			const user = userResult[0];
			if (!user) return null;

			const passwordsMatch = await bcrypt.compare(credentails.password, user.hashedPassword!)

			return passwordsMatch ? user : null

		},
	}),
	GoogleProvider({
	  clientId: process.env.GOOGLE_CLIENT_ID!,
	  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	}),
  ],
  session: {strategy: 'jwt'}
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

