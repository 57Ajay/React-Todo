import './App.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

const Data = [{
  title: "Shop",
  description: "This is a shop"
},
{
  title: "Blog",
  description: "This is a blog"
},
{
  title: "About",
  description: "This is about"
},
{
  title: "Contact",
  description: "This is contact"
}];

Data.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

const App = ()=>{
  const [data, setData] = useState(Data)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const titleSetter = (e) => {
    setTitle(e.target.value)
  };
  const descriptionSetter = (e) => {
    setDescription(e.target.value)
  };

  const handler = (e) => {
    e.preventDefault();
    setData([...data, { title, description }]);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <form>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={titleSetter}
          />
        </label><br/><br />
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={descriptionSetter}
          />
        </label><br/>
        <button
          type="submit"
          onClick={handler}
        >
          Add
        </button>
        <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      </form>
    </>
  );
};
export default App
