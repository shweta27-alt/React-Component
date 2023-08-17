import React,{useState}  from "react";
import left from "../left.png";
import right from "../right.png";

const container = {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    position: 'relative',
}

const leftclasses = {
  height: "20px",
  width: "20px",
};

const leftcontainer = {
  height: "35px",
  width: "35px",
  backgroundColor: "gray",
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  borderRadius : "50%",
  position: 'absolute',
  left: 0,
};

const rightcontainer = {
    height: "35px",
    width: "35px",
    backgroundColor: "gray",
    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : "50%",
    position :'absolute',
    right: 0,
}

const content1 = {
    width: "100%"
}

const content = {
    
}
const Swiper = () => {
    const [leftSwipe, setLeftSwipe] = useState("")

    const swipeRightToLeft = () => {
        
    }

    const swipeLeftToRight = () =>{

    }
  return (
    <div style={container}>

        <div style={content1}>item1</div>
        <div style={content}>item2</div>
        <div style={content}>item3</div>
        <div style={content}>item4</div>
        <div style={content}>item5</div>
        <div style={content}>item6</div>
      <div style={leftcontainer} onClick={swipeRightToLeft()}>
        <img src={left} alt="left" style={leftclasses} />
      </div>

      <div style={rightcontainer}>
        <img src={right} alt="left" style={leftclasses} />
      </div>
    </div>
  );
};

export default Swiper;
