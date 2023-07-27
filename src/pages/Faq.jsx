import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"
import Header from "../components/Header"


const Faq = () => {
  return (
    <div>
    <Header/>
    <div className="maincardcontainer">
    
      <div className="maincardleft">
        <LeftPanel />
      </div>
      <div className="maincardcenter">
            <h2 style={{padding: '10px 0 20px 0'}}>FAQ</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, nesciunt qui aspernatur temporibus iure ipsam explicabo assumenda ipsum commodi sapiente dolores nam ipsa, quidem odit fuga repellat quisquam possimus delectus porro earum officia aliquid blanditiis enim? Tempore quae autem ex inventore quasi ad rerum. Qui ratione beatae ipsum eius autem quis! Sit aperiam, repudiandae atque aspernatur eligendi dolorum! Maxime quia dolorum quisquam doloremque iusto voluptatibus autem accusantium nulla mollitia tempore sit blanditiis quidem velit dolor recusandae accusamus in, odio itaque consequuntur error nobis, eaque sed, adipisci nesciunt! Maxime tempore optio repudiandae consequuntur voluptates ea, ratione ad nesciunt odio, iste nihil.</p>
      </div>
        <div className="maincardright">
          <RightPanel />
        </div>
    </div>
    </div>
  )
}

export default Faq