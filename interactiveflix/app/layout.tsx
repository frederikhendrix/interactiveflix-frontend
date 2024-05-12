import { authOptions } from '../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from './SessionProvider';
import Login from './Login';
import Home from './page';
import LoginTest from '../pages/api/auth/login.js';

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
        {!session ? (
          <div>
          <Login/>
          <LoginTest/>
          </div>
          
        ): (
          <Home/>
        )}
      </SessionProvider>
      </body>
    </html>
  )
}
