export default function ProductDetails({
    params,
  }: {
    params: { 
        productID: string,
        reviewID : string    
    };
  }) {
    throw new Error('Uhhhhhh I made this error');
    return (
      // http://localhost:3000/products/2/reviews/2   use this url to see error handling
      <>
        <center>
          <h1>Product Number {params.productID} Review {params.reviewID}</h1>
        </center>
      </>
    );
  }
  