import React from 'react'

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://lipsum.app/random/340x180",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://lipsum.app/random/340x180",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://lipsum.app/random/340x180",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://lipsum.app/random/340x180",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://lipsum.app/random/340x180",
  },
]


const Home = () => {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <img src={post.img} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home