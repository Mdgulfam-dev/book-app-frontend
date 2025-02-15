import React, { useEffect, useState } from "react";
import BookCard from "../books/bookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Fix: Import missing styles
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
import { data } from "react-router-dom";

const categories = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  // const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();
  

  // useEffect(() => {
  //   fetch("/books.json") // ✅ Fix: Ensure correct path
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Failed to fetch books data");
  //       return res.json();
  //     })
  //     .then((data) => setBooks(data))
  //     .catch((err) => console.error("Error loading books:", err));
  // }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Category Selector */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Book Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        // pagination={{ clickable: true }} // ✅ Fix: Add pagination
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map(
            (book, index) =>
              book && (
                <SwiperSlide key={index}>
                  <BookCard book={book} />
                </SwiperSlide>
              )
          )
        ) : (
          <p className="text-gray-500">No books available in this category.</p>
        )}
      </Swiper>
    </div>
  );
};

export default TopSellers;
