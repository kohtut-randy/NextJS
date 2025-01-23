export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Feature Product</h2>
      {children}
    </>
  );
}
