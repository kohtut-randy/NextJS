import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
    </div>
  );
};

export default Blog;
