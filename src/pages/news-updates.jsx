import React from "react";
import Newscard from "../components/elements/newscard";
import "../styles/news-updates.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import newsupdatesimage from "../images/newsupdates.webp";

export default function NewsandUpdates() {
  return (
    <div className="newsmain">
      <Navbar />

      <div className="newsmainbody">
        <h1>News & Updates</h1>
        <p>
          Latest updates and insights on Irish Employment Permits and
          Immigration. If you have any questions, feel free to contact us.
        </p>
        <div className="newsbody">
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
          <Newscard
            image={newsupdatesimage}
            header="Ireland's February 2024 Unemployment Rate and Job Market"
            date="14 April"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
