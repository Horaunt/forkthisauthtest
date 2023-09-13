'use client'

import Image from 'next/image'
import axios from 'axios';
import {useRouter} from 'next/navigation';

export default function Home() {

  const handleAuth = async () => {
    //handle auth and redirect
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <button onClick = {handleAuth}>
        Sign in with github
      </button>
    </main>
  )
}
