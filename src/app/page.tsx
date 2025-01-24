import React from "react";

import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}

export default Home;
