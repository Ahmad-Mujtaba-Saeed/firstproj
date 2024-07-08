import Link from "next/link";
export const metadata = {
  title: "Products",
  description: "User profile by Next.js",
};
export default function Products() {
  return (
    <>
      <center>
        <h1>Products Page!</h1>
        <p>
          <Link href="products/1">Product 1</Link>
        </p>
        <p>
          <Link href="products/2">Product 2</Link>
        </p>
        <p>
          <Link href="products/3">Product 3</Link>
        </p>
      </center>
    </>
  );
}
