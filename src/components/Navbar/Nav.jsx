import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import './NavbarStyle.css';

// eslint-disable-next-line react/prop-types
export const Nav = ({to, children, ...props}) => {
    return (
        <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.4 }}
        >
            <Link 
                {...props}
                className={({isActive}) => isActive ? 'active' : undefined}
                to={to}
            >
                {children}
            </Link>
        </motion.li>
        
    )
}