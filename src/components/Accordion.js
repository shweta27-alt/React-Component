import React,{useState} from "react";
import arrow from "../expandarrow.png";
import collapse from '../arrow.png'
const containerwrapper = {
  height: "400px",
  width: "500px",
  backgroundColor: "pink",
};

const firstbox = {
  border: "1px solid black",
};

const headingcollapsewrapper = {
  display: "flex",
  justifyContent: "space-between",
};

const arrowstyle = {
  marginRight: "30px",
  marginTop: "20px",
};
const Accordion = () => {
    const [active , setActive] = useState(false)
  const expandClick = () => {
     setActive(!active)
  };
  return (
    <div style={containerwrapper}>
      <div style={firstbox}>
        <div style={headingcollapsewrapper}>
          <h3>Primary Title 1</h3>
          {active ?    <img
            src={collapse}
            alt="arrow-image"
            style={arrowstyle}
            width="20px"
            height="20px"
            onClick={expandClick}
          /> :  <img
          src={arrow}
          alt="arrow-image"
          style={arrowstyle}
          width="20px"
          height="20px"
          onClick={expandClick}
        /> }
        </div>
        {active &&  <div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo
          </p>
        </div> }
       
      </div>

      <div style={firstbox}>
        <div style={headingcollapsewrapper}>
          <h3>Primary Title 2</h3>
          {active ?    <img
            src={collapse}
            alt="arrow-image"
            style={arrowstyle}
            width="20px"
            height="20px"
            onClick={expandClick}
          /> :  <img
          src={arrow}
          alt="arrow-image"
          style={arrowstyle}
          width="20px"
          height="20px"
          onClick={expandClick}
        /> }
        </div>
        {active &&  <div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo
          </p>
        </div> }
       
      </div>

      <div style={firstbox}>
        <div style={headingcollapsewrapper}>
          <h3>Primary Title 3</h3>
          {active ?    <img
            src={collapse}
            alt="arrow-image"
            style={arrowstyle}
            width="20px"
            height="20px"
            onClick={expandClick}
          /> :  <img
          src={arrow}
          alt="arrow-image"
          style={arrowstyle}
          width="20px"
          height="20px"
          onClick={expandClick}
        /> }
        </div>
        {active &&  <div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo
          </p>
        </div> }
       
      </div>
    </div>
  );
};

export default Accordion;
