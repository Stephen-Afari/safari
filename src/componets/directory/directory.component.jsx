import DirectoryItem from '../category-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: "Adventure",
    imageUrl: "tour-1-cover.jpg",
    route: 'tour/adventure'
  },
  {
    id: 2,
    title: "Sporty",
    imageUrl: "tour-9-cover.jpg",
    route: 'tour/sporty'
  },
  {
    id: 3,
    title: "Exploratory",
    imageUrl: "tour-8-cover.jpg",
    route: 'tour/exploratory'
  },
];

const Directory = ()=>{
        return (
            <div className="directory-container">
              {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
              ))}
            </div>
          );
    
}

export default Directory;