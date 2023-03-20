import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
   <AnchorLink className="roundend-md bg-secondary-500 px-10 hover:bg-primary-500 hover:text-white">
    {children}
   </AnchorLink>
  )
}