'use client';
import { useRouter } from "next/navigation";

export default function OrderPlace(){
    const router = useRouter();
    const PlaceOrder = ()=>{
        console.log("OrderPlace Successfully");
        router.push('/');
    }
    return (
        <>
        <center>
        <h1>View Your order details</h1>
        <button onClick={PlaceOrder}>Place Order</button>
        </center>
        </>
    );
}