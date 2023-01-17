import React from "react";
import { fname,lname } from "../App";


const Comp3 = () => {
  return (
    <div>
      <h1>Component 3</h1>
      <fname.Consumer>
        {(fname)=>{
            return(
                <lname.Consumer>
                    {(lname)=>{
                        return(
                            <> my Full name is {fname} {lname}</>
                        )
                    }}
                </lname.Consumer>
            )
        }}
      </fname.Consumer>
    </div>
  );
};

export default Comp3;
