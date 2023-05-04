import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";


const categories = [
    {
      id: 1,
      title: "Adventure",
      imageUrl: "tour-1-cover.jpg",
    },
    {
      id: 2,
      title: "Sporty",
      imageUrl: "tour-9-cover.jpg",
    },
    {
      id: 3,
      title: "Exploratory",
      imageUrl: "tour-8-cover.jpg",
    },
  ];

const Home = ()=> {
    return (
    <div>
    
    <Directory categories={categories} />;
    <Outlet/>
    
    </div>
    )
  }
  
export default Home;