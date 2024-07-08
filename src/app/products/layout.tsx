export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
          <center>
            <h1>ProductLayout for all products</h1>
          </center>
        
        {children}
        </>    
  );
}
