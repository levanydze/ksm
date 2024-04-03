import GuyWithServices from "../components/sectionComponents/GuyWithServices/GuyWithServices";
// import ImageTextButton from "../../components/sectionComponents/ImageTextButton/ImageTextButton";
import FourBox from "../components/sectionComponents/FourBoxes/FourBox";
import TextIntoPhoto from "../components/sectionComponents/TextIntoPhoto/TextIntoPhoto";
import imagesJson from "../json/images.json";
import assetsJson from "../json/assets.json";
import PhotoText from "../components/sectionComponents/PhotoText/PhotoText";
import HomePageMain from "../components/HomePageHeads/HomePageMain/HomePageMain";
import MapAndTimes from "../components/sectionComponents/map&times/MapTimes";
import TwoTextAbout from "../components/sectionComponents/TwoTextAbout/TwoTextAbout";
import Dashboard from "../components/animations/SliderPeople/Dashboard";
import CutGrass from "../components/animations/cut-grass/CutGrass";

export const metadata = {
  title: "ChaCha Restaurant",
  description: "Delicious Food",
};

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const {
    textIntoPhoto,
    chef,
    headImage,
    guy,
    olivOilApple,
    pizzaHands,
    chef2,
    chef3,
    March26Main,
  } = imagesJson;
  return (
    <main>
      <HomePageMain image={pizzaHands} alt="pizza" outline={true} />
      <CutGrass absolute />

      <PhotoText
        image={chef3}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      />
      <TwoTextAbout />
      <GuyWithServices image={chef2} />
      <TextIntoPhoto
        TextIntoPhotoIcon={houseIcon}
        TextIntoPhotoImage={olivOilApple}
        alt="chair"
        reverse={false}
        title="The Secret of Oliv Oil"
        text="TEXT 111 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <TextIntoPhoto
        TextIntoPhotoIcon={chair}
        TextIntoPhotoImage={textIntoPhoto}
        alt="chair"
        reverse={true}
        title="Garantee of Crispiness"
        text="TEXT 222 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, modi sapiente sed perspiciatis fuga facilis laboriosam, necessitatibus accusamus temporibus id minima, doloremque tempora neque illo qui eveniet nobis optio?"
      />
      <Dashboard />
      <CutGrass absolute />
      <FourBox />
      <MapAndTimes />
    </main>
  );
}