import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Remarkable } from "remarkable";

import style from "./style.css";

const FILENAMES = [
  "2023-12-23",
  "2023-12-3",
];

const Blog = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    FILENAMES.forEach(file => {
      import(`./posts/${file}.md`)
        .then(res => setFiles(prev => [...prev, res.default]));
    });
  }, []);
  return (
    <div className={style.blog}>
      <div className={style.content}>
        {files.map(file => (
          <div dangerouslySetInnerHTML={{ __html: new Remarkable().render(file) }} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
