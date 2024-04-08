import React, { useEffect, useState } from 'react'

interface Group {
  id: number
  name: string
  created_at: string
  updated_at: string
}

const Home = () => {
  const [groups, setGroups] = useState<Group[]>([])
  useEffect(() => {
    getGroups()
  }, [])
  const getGroups = () => {
    fetch('http://localhost:3000/groups')
      .then((res) => res.json())
      .then((groups: Group[]) => setGroups(groups))
  }
  return (
    <div>
      <h1 className="font-bold">This is the Home page</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
