import React from "react";
import "../../vendor/notes.css";
const SmallNote = () => (
    <div>
      <textarea id="note" name="subject" placeholder="Write something.." style={{height:200, clear:"both"}}></textarea>
    </div>
)
export default SmallNote;