"use client";

import React from 'react';
import styles from './deletion.module.css';
import Image from "next/image";

const getData = async (index) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${index}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const Deletion = ({ index }) => {

  const handleDelete = async () => {
    try {
      const posts = await getData(index);
      const postIdToDelete = posts[index]?.id; // Assuming each post has an 'id' field
      const deleteUrl = `http://localhost:3000/posts/${postIdToDelete}`;

      const response = await fetch(deleteUrl, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
      // Add logic to show error to the user if needed
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.delButton} onClick={handleDelete}>
        <Image src="/minus.png" alt="" width={16} height={16} />
        </button>
    </div>
  );
};

export default Deletion;
