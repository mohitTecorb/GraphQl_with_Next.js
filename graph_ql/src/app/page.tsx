
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import HandlerAPI from '@/component/page';
import MyComponent from "@/component/ComponentByApollo";
const Home: React.FC = () => {


  return (
    <div>
      <h1>SpaceX Launches</h1>
      {/* <HandlerAPI /> */}
      <MyComponent />
    </div>
  );
};

export default Home;
