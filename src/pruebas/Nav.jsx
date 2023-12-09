/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const Nav = ({to, children, ...props}) => {
    return (
        <NavLink 
            {...props}
            className={({isActive}) => isActive ? 'is-active' : undefined}
            to={to}
        >{children}
        </NavLink>
    )
}