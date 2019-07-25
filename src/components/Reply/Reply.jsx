import React from "react";
import ReplyOnTop from "./ReplyOnTop";
import Replies from "./Replies";

const Reply = ({ NavBar }) => {
  return (
    <>
      <ReplyOnTop />
      <Replies
        id={<span>Justin</span>}
        comment={
          <text>
            Our curated library of royalty-free music gives you the polished
            feel of the big production houses. All our tracks are exclusive and
            copyright clear.
          </text>
        }
      />
      <Replies
        id={<span>Justin</span>}
        comment={
          <text>
            Our curated library of royalty-free music gives you the polished
            feel of the big production houses. All our tracks are exclusive and
            copyright clear.
          </text>
        }
        ReOfReply={true}
      />
      {NavBar}
    </>
  );
};

export default Reply;
