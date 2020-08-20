import React from "react";

export default function Home() {
  return (
    <div className="main">
      <section className="main-bg">
        <div className="main-content">
          <div className="main-title">
            <h1>Discover your next destination</h1>
          </div>
          <div className="intro">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              vero repellat voluptate quo hic? Ducimus beatae, omnis vel
              deleniti aut, saepe quasi voluptas repellat dolore provident
              reprehenderit natus esse odit?m
            </p>
          </div>
        </div>
        <div className="searchbox">
          <div className="search-title">
            <h3>Find your next destination</h3>
          </div>
          <div className="search-field">
            {/* <label>Destination :</label> */}
            <input className="search" type="text" />
          </div>
          <a href="" className="btn btn-search">
            Explore
          </a>
        </div>
        <div className="links">
          {/* <a href="" className="btn btn-outline">
            explore
          </a> */}
        </div>
      </section>
      <section className="destination">
        {/* <div className="destinationlist"> */}
        <div className="listheading">
          <h1>Top destinations in New Zealand</h1>
        </div>
        <div className="destinationcard">
          <div className="placecard">list1</div>
          <div className="placecard">list2</div>
          <div className="placecard">list3</div>
          <div className="placecard">list4</div>
        </div>
        {/* </div> */}
      </section>
      <section className="recentlysearch">
        <div className="listheading">
          <h1>Recent Searches</h1>
          <p>See what people are searching for their next adventure</p>
        </div>
        <div className="recentcard">
          <div className="recentcardlist">list1</div>
          <div className="recentcardlist">list1</div>
          <div className="recentcardlist">list1</div>
          <div className="recentcardlist">list1</div>
          <div className="recentcardlist">list1</div>
          <div className="recentcardlist">list1</div>
        </div>
      </section>
      <section className="recentcomments">
        <div className="commentheading">
          <h1>Recent Comments</h1>
          <p>Read what people are talking about the places they have visited</p>
        </div>
        <div className="commentsection">
          <div className="placeimage">image1</div>
          <div className="commentlist">
            <div className="comments">
              <div className="profileimg"></div>
              <div className="info">
                <h5>
                  {" "}
                  It was an amazing experience It was an amazing experienceIt
                  was an amazing experience
                </h5>
                <p>Aswin, Feb 25, 2020</p>
              </div>
            </div>
            <div className="comments">
              <div className="profileimg"></div>
              <div className="info">
                <h5>
                  {" "}
                  It was an amazing experience It was an amazing experienceIt
                  was an amazing experience
                </h5>
                <p>Aswin, Feb 25, 2020</p>
              </div>
            </div>
            <div className="comments">
              <div className="profileimg"></div>
              <div className="info">
                <h5>
                  It was an amazing experience It was an amazing experienceIt
                  was an amazing experience
                </h5>
                <p>Aswin, Feb 25, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommendation">
        <div className="commentheading">
          <h1>Recommended places to visit</h1>
        </div>
        <div className="recommendplaces">
          <div className="recommendlist">list1</div>
          <div className="recommendlist">list1</div>
          <div className="recommendlist">list1</div>
        </div>
      </section>
    </div>
  );
}
