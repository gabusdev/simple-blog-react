import { FunctionComponent } from "react";

interface BlogProps {
  id: string;
  title: string;
  author: string;
  body: string;
  handleDelete: Function;
}

// Las siguientes dos lineas son igula de funcionales, solo hay q descomentar
// la declaracion de la constante blog
// y llamar los valores desde ese objeto blog
// const Blog: FunctionComponent<BlogProps> = (props) => {
const Blog: FunctionComponent<BlogProps> = ({
  id,
  title,
  author,
  handleDelete,
}) => {
  // const blog = props;

  return (
    <div className='blog-preview' key={id}>
      <h3>{title} </h3>
      <p>Written by {author}</p>
      <button onClick={() => handleDelete(id)}>delete blog</button>
    </div>
  );
};

export default Blog;
