import React from "react";


const PostHeader = props => {
    return (
      <div className="post-header">
      

        <h2>{props.nickname}</h2>
      </div>
    );
  };
  
  export default PostHeader;