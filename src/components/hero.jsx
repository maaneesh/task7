import React from "react";

function Hero() {
  return (
    <div className="min-h-90 bg-gray-100 flex flex-col items-center justify-center">
      <div class="card bg-base-100 shadow-xl max-w-md mx-auto p-8">
        <h2 class="card-title text-2xl font-bold mb-6">Profile</h2>
        <p class="text-base-content">
          To create responsive, user-friendly, and efficient web applications
          that solve real-world problems and enhance digital experiences, while
          continuously adapting to evolving technologies and best practices in
          web development
        </p>
      </div>
      <div className="text-base-content mt-6">
        <div className="card-body">
          <h2 className="card-title">Manish Chaudhari</h2>
          <p>Hey, I'm a web-developer based in New York City.</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Leave a message!"
        className="input input-bordered m-2 md:m-4 lg:m-8  input-lg  bg-white text-gray-800  placeholder-gray-400"
      ></input>
      <div>
        <button className="btn btn-primary mb-4 mt-4 mx-2">Send!</button>
      </div>
    </div>
  );
}

export default Hero;
