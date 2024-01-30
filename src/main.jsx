import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import StarRating from "./StarRating";

// eslint-disable-next-line react-refresh/only-export-components
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={45} color="red" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
