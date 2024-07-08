"use client";
export default function ErrorHandler({error,reset,}:{
    error:Error;
    reset: ()=>void;
}){
    return (
        <>
        <h1>Oh NOOO Again error</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
        </>
    );
}