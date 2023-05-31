import { useState, useEffect } from "react";

import '../App.css'

const test = 'test'

export default function About(props) {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };
  useEffect(() => {getAboutData()}, []);

  const loaded = () => (
    <div className="flex flex-col justify-center items-center mx-auto mt-4 mb-4 w-full sm:w-3/4 lg:w-1/2 px-4">
      <h2 className="mb-4">{about.name}</h2>
      <h3 className="mb-4">{about.email}</h3>
      <p className="text-center">{about.bio}</p>
    </div>
  );
  
  return about ? loaded() : <h1>Loading...</h1>
}
