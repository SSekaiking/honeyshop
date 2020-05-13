import Head from 'next/head'
import Navbar from './Components/Navbar';
import G from '../site_config.json';
import SmallPost from './Components/SmallPost';
import Footer from './Components/Footer';

const Home = () => (
  <div className="container">
    <Head>
      <title>{G.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Changa:300,400,500,600,700,800&display=swap" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
    </Head>

    <Navbar />
    <div className="container">
      <div className="top-part">
        <div className="left">
          <div className="moto" dangerouslySetInnerHTML={{ __html: G.moto }}>
          </div>
          <button>Shop Now</button>
        </div>
        <div className="showoff">
          <img src="assets/img/honey_bottle.png" alt="honey bottle" />
        </div>
      </div>
      {/* articles */}
      <div className="why-container">
        <h1 className="title">
          WHY HONEY?
          </h1>
        <div className="info">
          <img src="assets/img/info.png" alt="honey infographic" />
        </div>
      </div>
      <div className="story-container">
        <h1 className="title">
          OUR STORY
          </h1>
        <div className="story">
          <p dangerouslySetInnerHTML={{ __html: G.ourstory }}></p>
        </div>
        <div className="action">
          <button>ENJOY THE BENEFITS</button>
        </div>
      </div>
      <div className="articles-container">
        <h1 className="title">Best Selling</h1>
        <div className="posts">
          <SmallPost title="20+ ACTIVE Raw Organic Coffee Bean Honey from Mexico 227g" img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Bedsure Sherpa Fleece Blanket Queen Size " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Kitchen Knife 8 inch Professional Japanese Chef Knives 7CR17 440C " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="low price Miraculous Medal cheap HUGE Gold Tone Metal medal badges " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />

          <SmallPost title="20+ ACTIVE Raw Organic Coffee Bean Honey from Mexico 227g" img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Bedsure Sherpa Fleece Blanket Queen Size " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Kitchen Knife 8 inch Professional Japanese Chef Knives 7CR17 440C " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="low price Miraculous Medal cheap HUGE Gold Tone Metal medal badges " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />

          <SmallPost title="20+ ACTIVE Raw Organic Coffee Bean Honey from Mexico 227g" img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Bedsure Sherpa Fleece Blanket Queen Size " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Kitchen Knife 8 inch Professional Japanese Chef Knives 7CR17 440C " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="low price Miraculous Medal cheap HUGE Gold Tone Metal medal badges " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />

          <SmallPost title="20+ ACTIVE Raw Organic Coffee Bean Honey from Mexico 227g" img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Bedsure Sherpa Fleece Blanket Queen Size " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="Kitchen Knife 8 inch Professional Japanese Chef Knives 7CR17 440C " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
          <SmallPost title="low price Miraculous Medal cheap HUGE Gold Tone Metal medal badges " img="https://cdn.shopify.com/s/files/1/0798/7885/products/CharlestonBeesandHoney_CombJar_1_edited.jpg?v=1485176858" />
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
    .container {
      background: url('/assets/img/b1.png');
      width: 100%;
    }
    .top-part {
      padding-top: 200px;
      width: 1400px;
      max-width: 90vw;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto;
    }
    .moto {
      font-size: 76px;
      line-height: 1.4;
      color: #ffffff;
      font-weight: bold;
    }
    .top-part .left{
      padding-top: 100px;
    }
    .top-part .left button{
      background: none;
      border: 5px solid #fc9e01;
      font-size: 30px;
      font-weight: 600;
      padding: 1px 40px;
      font-family: 'Changa', sans-serif;
      color: #ffffff;
      margin: 40px 120px;
      transition-duration: 100ms;
      cursor: pointer;
    }
    .top-part .left button:hover{
      background: #fc9e0120;
    }
    .top-part .left button:active{
      padding: 3px 42px;
      border: 3px solid #fc9e01;
    }
    .top-part .showoff{
      margin: auto;
    }
    .top-part .showoff img{
      width: 370px;
    }

    .why-container{
      background: #ffffff;
      margin-top: 180px;
      border-top-left-radius: 20%;
      border-top-right-radius: 20%;
      display: flex;
      flex-direction: column;
    }
    .why-container .title{
      border-top: 10px solid #fc9e01;
      border-bottom: 10px solid #fc9e01;
      margin: auto;
      margin-top: 50px;
      font-size: 60px;
      line-height: 1.4;
      color: #010101;
    }
    .why-container .info {
      margin: auto;
      width: 80%;
    }
    .why-container .info img{
      width: 100%;
    }
    .story-container {
      background: url("assets/img/b2.png");
      display: flex;
      color: #ffffff;
      flex-direction: column;
      text-align: center;
      padding: 40px 0;
    }
    .story-container .title{
      border-top: 10px solid #f4cc2b;
      border-bottom: 10px solid #f4cc2b;
      margin: 10px auto;
      font-size: 40px;
      line-height: 1.3;
    }
    .story-container .story{
      font-size: 28px;
      font-weight: 600;
      line-height: 1.4;
      text-align: left;
      max-width: 60vw;
      margin: auto;
    }
    .story-container .action button{
      background: #f4cc2b;
      color: #010101;
      border: 0;
      font-size: 22px;
      font-weight: 700;
      padding: 16px 32px;
      border-radius: 20px;
      margin: 30px auto;
      cursor: pointer;
      transition-duration: 200ms;
    }
    .story-container .action button:hover{
      background: #f7d345;
    }
    .articles-container{
      background: #fff;
      background: #eee;
      padding: 20px 10vw;
    }
    .articles-container .title{
      margin: 0;
    }
    .articles-container .posts{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    
    // responsive
@media only screen and (max-width: 800px) {
  .top-part{  
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      text-align: center;
  }
  .top-part .showoff{
      grid-row: 1;
    }
    .top-part .showoff img{
      width: 40vw;
    }
    .moto{
    font-size: 40px;
  }
  .top-part .left{
    padding-top: 20px;
    max-width: 90vw;
    margin: auto;
  }
  .top-part button{
    font-size: 22px!important;
    margin: 30px auto !important;
  }
  .why-container {
    margin-top: 40px;
  }
  .why-container .title{
    border-top: 7px solid #fc9e01;
    border-bottom: 7px solid #fc9e01;
    margin-top: 20px;
    font-size: 30px;
    line-height: 1.2;
  }
  .why-container .info{
    width: 95%;
  }
  .story-container {
    padding: 0;
  }
  .story-container .title{
    border-top: 7px solid #f4cc2b;
    border-bottom: 7px solid #f4cc2b;
    margin-top: 20px;
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  .story-container .story p{
    font-size: 22px;
    margin: 5px auto;
  }
  .story-container .action button{    
    font-size: 16px;
    padding: 10px 20px;
    margin: 16px auto;
  }
  .articles-container {
    padding: 20px 1vw;
  }
}



@media only screen and (max-width: 1440px) {
  .top-part{  
      grid-template-columns: auto auto;
      grid-template-rows: auto;
  }
  .top-part .moto{
    font-size: 50px;
  }
  .top-part .showoff img{
    width: 300px;
  }
  .top-part button{
    font-size: 26px!important;
    margin: 30px auto !important;
  }
  .why-container {
    margin-top: 100px;
  }
  .why-container .title{
    margin-top: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
  .story-container {
    padding: 0;
  }
  .story-container .title{
    border-top: 10px solid #f4cc2b;
    border-bottom: 10px solid #f4cc2b;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
  .story-container .story p{
    font-size: 26px;
    margin: 5px auto;
  }
  .story-container .action button{    
    font-size: 19px;
    padding: 12px 24px;
    margin: 16px auto;
  }
}


      `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-family: 'Changa', sans-serif;

      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
