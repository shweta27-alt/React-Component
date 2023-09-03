import React from 'react'
import './Tooltip.css'

const Tooltip = () => {
  return (
    <>
    <div className="container">
       {/* <h4 >tooltip on top</h4> */}
       <div className="tooltip top" title="tooltip on top">
        Hover over me
       </div>

    </div>

     <div className="container">
       {/* <h4 >tooltip on top</h4> */}
       <div className="tooltip bottom" title="tooltip on bottom">
        Hover over me
       </div>
    </div>

    <div className="container">
       {/* <h4 >tooltip on top</h4> */}
       <div className="tooltip left" title="tooltip on left">
        Hover over me
       </div>
    </div>

    <div className="container">
       {/* <h4 >tooltip on top</h4> */}
       <div className="tooltip right" title="tooltip on right">
        Hover over me
       </div>
    </div>
    </>
  )
}

export default Tooltip
