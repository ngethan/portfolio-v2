import axios from "axios";
import React from "react";

const handleSubmit = () => {
  axios
    .post("/api/writing/post", {
      title: "Bacon, egg, and cheese",
      description:
        "A sentence detailing my experiences with bacon, egg, and cheese sandwiches.",
      content: [
        {
          type: "span",
          text: "I could go for a ",
        },
        {
          type: "link",
          href: "https://www.sipandfeast.com/wp-content/uploads/2021/10/bacon-egg-cheese-recipe-snippet.jpg",
          content: [
            {
              type: "span",
              text: "bacon",
              className: "text-[#ca0b4a]",
            },
            {
              type: "span",
              text: ", ",
              className: "text-gray-300",
            },
            {
              type: "span",
              text: "egg",
              className: "text-[#fff]",
            },
            {
              type: "span",
              text: ", and ",
              className: "text-gray-300",
            },
            {
              type: "span",
              text: " cheese",
              className: "text-[#fcd53f]",
            },
          ],
        },
        {
          type: "span",
          text: " right now.",
        },
      ],
      date: Date.now(),
      metadata: {},
      views: 57235,
      slug: "baconeggncheese",
      hidden: false,
    })
    .catch();
};

// const handleSubmit = () => {
//     console.log("hi");
//     axios
//         .delete("/api/writing/delete/64836d1a8802e165c49dd216", {})
//         .then((res) => {
//             console.log(res.data.message);
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// };

const newblog = () => {
  return (
    <div>
      <button onClick={handleSubmit} className="text-gray-100">
        create new blog
      </button>
    </div>
  );
};

export default newblog;
