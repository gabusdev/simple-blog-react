import { FunctionComponent, useEffect, useState } from "react";
import BlogList from "./BlogList";
import { BlogModel } from "./Types";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  useEffect(() => {
    fetch("https://localhost:7275/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
    // console.log("use effect ran");
  }, []);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' />
    </div>
  );
};

export default Home;
