import React, { createContext, useContext, useReducer } from "react";
import {
  ProjectsActions,
  ProjectsState,
  initialState,
  reducer,
} from "./reducer";
const ProjectsStateContext = createContext<ProjectsState | undefined>(
  undefined
);

// Lets define a new type called ProjectsDispatch using TypeScript.

type ProjectsDispatch = React.Dispatch<ProjectsActions>;

// Using createContext function, we will create a context
// called `ProjectsDispatchContext`. Let's say the shape of this new
// context object is ProjectsDispatch (which I'll define now, wait for it).
// I've set the default value to undefined.

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(
  undefined
);
export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};

export const useProjectsState = () => useContext(ProjectsStateContext);

// This line defines a custom hook `useProjectsState`, that uses the `useContext`
// hook to access the value stored in the `ProjectsStateContext`.
// The `ProjectsStateContext` is created using the createContext function
// and is used to store the current `state` of the projects.
// By using the `useProjectsState` hook in a component,
// you can retrieve the current `state` of the projects without directly accessing
// the context or passing down the state as a prop. This simplifies the code
// and ensures that the state is always up to date.

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

// This line defines a custom hook `useProjectsDispatch` that also uses the
//`useContext` hook to access the value stored in the `ProjectsDispatchContext`.

// The `ProjectsDispatchContext` is created using the createContext function and is
// used to store the `dispatch` function for updating the state of the projects.
// By using the `useProjectsDispatch` hook in a component, you can retrieve the
// `dispatch` function without directly accessing the context or passing it down
// as a prop. This allows you to dispatch actions to update the state of projects
//  from anywhere within your component tree that is wrapped with
// the`ProjectsProvider`.