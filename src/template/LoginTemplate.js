import React from "react";
import { Appwrapper } from "../components/appwrapper/wrapper.style";
import { Tempwrapper, Tem } from "./temp.style";

const Template = (props) => {
  
  const { children } = props;
  return (
    <Appwrapper>
      <Tem id="responsive">
        <Tempwrapper>
          <img src="https://i0.wp.com/academiamag.com/wp-content/uploads/2022/03/shutterstock_522019972-scaled-1.jpg?fit=1920%2C1190&ssl=1"></img>
        </Tempwrapper>
        <div className="route-wrapper">{children}</div>
      </Tem>
    </Appwrapper>
  );
};

export default Template;
