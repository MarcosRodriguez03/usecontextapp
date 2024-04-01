'use client'
import { useAppContext } from '@/context/context';
import { useRouter } from 'next/navigation'
import React from 'react'

const PageTwo = () => {
    const router = useRouter();

    const { pageTwoName } = useAppContext();

    const handlePageChange = () => {
        router.push('/');
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 >Page two name: {pageTwoName}</h1>
            <button onClick={handlePageChange}>Change page</button>
        </main>
    )
}

export default PageTwo
