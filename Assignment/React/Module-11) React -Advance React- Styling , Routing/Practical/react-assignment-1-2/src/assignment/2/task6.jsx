import React, { useState, useEffect } from 'react';

const Task26 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>API Data:</h3>
      <ul>
        {data ? data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        )) : <p>Loading...</p>}
      </ul>
    </div>
  );
};

export default Task26;
