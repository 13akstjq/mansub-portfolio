import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(1);
  const [posts, setPosts] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <BlogContext.Provider
      value={{
        scrollIndex,
        setScrollIndex,
        selectedPost,
        setSelectedPost,
        posts,
        setPosts
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
