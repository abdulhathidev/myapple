import React, { useEffect, useState } from "react";

export const BACKEND_API_URI = process.env.REACT_APP_MYAPPLE_API_URI;

interface Group {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

const Home = () => {
  console.log(process.env.REACT_APP_MYAPPLE_API_URI);
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    getGroups();
  }, []);
  const getGroups = () => {
    fetch(`${BACKEND_API_URI}/api/v1/groups`)
      .then((res) => res.json())
      .then((groups: Group[]) => setGroups(groups));
  };
  return (
    <div>
      <h1 className="font-bold">This is the Home page</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
