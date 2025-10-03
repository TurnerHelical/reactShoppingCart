import "../styles/home.css";
import storeImg from '../assets/groceryStorefront.png'
const Home = () => {
  return (
    <>
      <div id="content">
        <div id="welcome">
          <img
            src={storeImg}
            id="homeImage"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque explicabo, nam incidunt vero sit. Pariatur quisquam quo
            veniam autem ut sapiente aliquam voluptate? Quidem ratione
            exercitationem distinctio eveniet nulla!
          </p>
        </div>
        <div id="reviewCtr">
          <div id="reviewTitle">
            <h2>"This is what our customers have to say"</h2>
          </div>
          <div id="reviewCardCtr">
            <div className="reviewCard">
              <div>
                <h4>-Reviewer's Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt tempore ipsum aut provident. Iure quo officia
                  deserunt reprehenderit? Iusto maxime, perspiciatis nisi est
                  harum mollitia debitis perferendis praesentium nihil impedit.
                </p>
              </div>
            </div>
            <div className="reviewCard">
              <div>
                <h4>-Reviewer's Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt tempore ipsum aut provident. Iure quo officia
                  deserunt reprehenderit? Iusto maxime, perspiciatis nisi est
                  harum mollitia debitis perferendis praesentium nihil impedit.
                </p>
              </div>
            </div>
            <div className="reviewCard">
              <div>
                <h4>-Reviewer's Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt tempore ipsum aut provident. Iure quo officia
                  deserunt reprehenderit? Iusto maxime, perspiciatis nisi est
                  harum mollitia debitis perferendis praesentium nihil impedit.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
