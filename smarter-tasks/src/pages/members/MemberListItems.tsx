// src/pages/projects/ProjectListItems.tsx

// First, I'll import the useProjectsState custom hook to access projects state.
import Delete from "../../assets/images/delete.png";
import { deleteMember } from "../../context/members/actions";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";

export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  let state: any = useMembersState();
  const dispatch = useMembersDispatch();
  const handleRemoveMember = async (id: number) => {
    if (!dispatch) {
      console.error("Dispatch is not defined.");
      return;
    }
    try {
      // Make DELETE request to remove the member
      await deleteMember(dispatch, id);

      // If successful, update state by dispatching an action to remove the member
      dispatch({ type: "DELETE_MEMBER", payload: id });
    } catch (error) {
      console.error("Error removing member:", error);
      // Handle error, if any
    }
  };

  // Next, I'll destructure the state object to gain access to projects,
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state;

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the projects object to show the
  // individual projects card.
  return (
    <>
      {members.map((member: any) => (
        <div
          id={member.id}
          key={member.id}
          className=" member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2  font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {member.name}
          </h5>
          <h5 className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white">
            Email: {member.email}
          </h5>
          <button
            onClick={() => handleRemoveMember(member.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
          >
            <img className="h-8" src={Delete} alt="Delete Icon" />
            Delete
          </button>
        </div>
      ))}
    </>
  );
}