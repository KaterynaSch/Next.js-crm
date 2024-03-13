'use client';

import { useRouter } from 'next/navigation';
import Button from './components/button';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="h-screen bg-gradient-to-tr from-lime-200 to-purple-100 ">
        <div className="flex gap-4 justify-center items-center px-auto pt-72 py-auto">
          <Image width={48} height={48} src="/icons/logo1.svg" alt="logo" />
          <h1 className=" text-6xl font-bold  text-center text-purple-300">
            TruScape{' '}
          </h1>
        </div>
        <div className="flex gap-8 justify-center mt-14">
          <Button onClick={() => router.push('/dashboard')}>
            Dashboard
          </Button>
          <Button onClick={() => router.push('/companies')}>
            Companies
          </Button>
        </div>
      </div>
    </main>
  );
}
