import "./List.css";
import { BiDialpad } from "react-icons/bi";
import InvitedUser from "./InvitedUser";

const List = () => {
  return (
    <>
      <div className="wrapper">
        <i>
          <BiDialpad />
        </i>
        <h1>Add Team members</h1>
        <p>
          You haven't added any theam memebers to your project yet. As the owner
          of this project. you can manage team members permissions.
        </p>
        <div className="email_part">
          <input type="emmail" />
          <button>Send Invite</button>
        </div>
        <h4>TEAM MEMBERS PREVIOUSLY ADDED TO PROJECTS</h4>
        <div className="invited__user">
          <InvitedUser />
        </div>
      </div>
    </>
  );
};

export default List;
