import Demo from './Demo';
import UseEffectDemo from "./UseEffectDemo";
import UseContextDemo1 from './UseContextDemo1';
import Accordian from './Accordian/Accordian';
import ColorPicker from './RendomColorPicker/ColorPicker';
import RatingStar from './RatingStar/RatingStar';
import ImageSlider from './ImageSlider/ImageSlider';
import LoadMore from './LoadMore/LoadMore'
import TreeView from './SideMenu/TreeView';
import QrCodeGenerator from './QRcodeGenerator/QrCodeGenerator';
import Scroll from './Scroll_Indicator/Scroll';
import ChangeMode from './Ligth-Dark-Mode/ChangeMode'
import TabsData from './Custom-tabs/TabsData';
import PopUpTest from './CustomPopUp/PupUpTest';
import ShowMoreText from './ShowMore/ShowMoreText';
import TermsAndConditions from './Terms&Conditions/TermsAndConditions';

const text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
const App = () =>
{
  return(
    <>
       {/* <Accordian />
    <ColorPicker />
   <RatingStar noOfStars={10}/>
    <ImageSlider />
    <LoadMore /> 
    <TreeView />    
    <QrCodeGenerator></QrCodeGenerator>                                                                                         
    <ChangeMode />  */}
    {/* <Scroll url={"https://dummyjson.com/products"}/> */}
    {/* <TabsData />
    <PopUpTest /> */}

    {/* <ShowMoreText text={text}/> */}
    <TermsAndConditions />

     </>
  )
}

export default App
