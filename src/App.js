import './scss/main.scss';
import Sidebar from './js/sidebar';
import Realtors from './js/realtors';
import Homes from './js/homes';
import Header from './js/header';
import Gallery from './js/gallery';
import Footer from './js/footer';
import Features from './js/features';
import StoryPictures from './js/story-pictures';
import StoryContent from './js/story-content';

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Header></Header>
      <Realtors></Realtors>
      <Features></Features>
      <StoryPictures></StoryPictures>
      <StoryContent></StoryContent>
      <Homes></Homes>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
