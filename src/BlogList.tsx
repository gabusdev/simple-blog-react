import { FunctionComponent } from "react";
import Blog from "./Blog";
import { BlogModel } from "./Types";

interface BlogListProps {
  blogs: BlogModel[];
  title: string;
  handleDelete: Function;
}

const BlogList: FunctionComponent<BlogListProps> = ({
  blogs,
  title,
  handleDelete,
}) => {
  // const blogs = props.blogs; // Se puede usar asi llamando al parametro prop o como lo hice ahora

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Blog blog={blog} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BlogList;
