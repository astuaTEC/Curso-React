import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes', counter);

    const { author, quote} = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ?
                (
                    <LoadingQuote />
                ) : (
                    <Quote quote={ quote } author={ author }/>
                )
            }

            <button 
                disabled={isLoading}
                onClick={ () => increment() } 
                className='btn btn-primary' >
                Next quote
            </button>

        
        </>
    )
}
