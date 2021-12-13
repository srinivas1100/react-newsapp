import styled from "styled-components";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsCard from "./components/NewsCard";
import SideNav from "./components/SideNav";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <SideNav />
        <News />
        {/* <NewsCard /> */}
      </Container>
    </div >
  );
}

export default App;
