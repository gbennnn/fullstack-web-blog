import React from 'react'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <a href="#" className='back'>&lt; Back</a>
        <img src="https://lipsum.app/random/340x180" alt="" />

        <div className="user">
          <img src="https://lipsum.app/random/340x180" alt="" />
          <div className="info">
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <a href="/write?edit=2">Edit</a>
          </div>
          <div className="delete">
            <a href="#">Delete</a>
          </div>
        </div>

        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum soluta aspernatur, neque veniam magnam deserunt dicta sed voluptatum quis optio enim tempora? Veniam perspiciatis deserunt voluptate rerum delectus inventore corrupti, possimus soluta ipsa, ipsum nostrum ratione eaque a quod harum quaerat itaque eum eveniet temporibus ex tempore. At perferendis quisquam excepturi dolorum optio totam consequatur facere blanditiis assumenda sit omnis iure voluptatem, quae, dignissimos mollitia provident aliquid ullam culpa, iusto autem consequuntur nesciunt laborum.</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium natus saepe autem laborum praesentium repellat sunt, in velit ratione molestias quidem quaerat id sapiente labore? Provident molestias adipisci corrupti ab ea, quia eveniet ad accusantium saepe, impedit alias eius architecto!</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis, facere officiis ad animi expedita et dolores eum adipisci. Sed praesentium necessitatibus tenetur voluptatibus itaque recusandae officia debitis officiis ipsam sit dignissimos nulla, vitae tempora totam odit hic dicta impedit sapiente, perferendis odio cum iste similique! Recusandae amet qui, vitae, nesciunt dolores eaque sunt quibusdam aspernatur est maxime iusto atque.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single