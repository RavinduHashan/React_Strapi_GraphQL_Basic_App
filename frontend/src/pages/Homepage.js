import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
// import { useQuery, gql } from "@apollo/client";

// const review = gql`
//   query getReviews {
//     reviews {
//       title
//       body
//       tating
//       id
//     }
//   }
// `;

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/reviews");
  // const { loading, error, data } = useQuery(review);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      {data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h1>{review.title}</h1>
          <small>console list</small>
          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>

    // <div>
    // {data.reviews.map(review => (
    //   <div key={review.id} className="review-card">
    //     <div className="rating">{review.rating}</div>
    //     <h2>{review.title}</h2>

    //     {review.categories.map(c => (
    //       <small key={c.id}>{c.name}</small>
    //     ))}

    //     <p>{review.body.substring(0, 200)}...</p>
    //     <Link to={`/details/${review.id}`}>Read more</Link>
    //   </div>
    // ))}
    // </div>
  );
}