import React from "react";
import Casts from "../components/casts/Casts";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const CastList = () => {
   return (
      <div>
         <Navbar />
         <Casts allCast={true} />
         <Footer />
      </div>
   );
};

export default CastList;
