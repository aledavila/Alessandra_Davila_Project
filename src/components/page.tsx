import React from 'react';
import Head from 'next/head';

interface PageProps {
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  headTitle?: string;
  loading?: boolean;
}

const Page = ({
  children,
  className,
  error = false,
  headTitle = '',
  loading = false,
}: PageProps) => {

  if (loading) {
    return (
      <p className='state--handling'>Loading...</p>
    )
  }

  if (error) {
    return (
      <p className='state--handling'>Error</p>
    )
  }

  return (
    <div className={className}>
      { headTitle && (
        <Head>
          <title>{headTitle}</title>
        </Head>
      )}
      {children}
    </div>
  )
};

export default Page;
