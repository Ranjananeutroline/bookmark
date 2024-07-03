import React from "react";
import { MdOutlineCancel} from "react-icons/md";
const CancelIcon = ({ deleteIcon ,id}) => {
  return (
    <div>
      <MdOutlineCancel className="cancelIcon" onClick={()=>{
              deleteIcon(id)}
            } />
    </div>
  );
};

export default CancelIcon;
