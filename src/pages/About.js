import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-intro">
        <h1>About</h1>
        <div className="about-grid">
          <div className="tp-logo"></div>
          <div className="about-desc">
            <h3>Traveler Paradise</h3>
            &nbsp;
            <p>
              Traveler paradise helps you to find out your next travel
              destination or any fun activities based on your current location.
              It also has a search feature that allows you to search for any
              destination that you desire.
              <br />
              <br />
              This is app is powered by Google Places API. The results are
              limited to 20 at the moment due to the limitation on using a free
              tier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
