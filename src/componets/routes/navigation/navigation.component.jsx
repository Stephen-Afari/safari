import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
// import {ReactComponent as MyLogo} from '../../../assets/VirtualSpliceLogo3.PNG';
import { ReactComponent as MyLogo } from '../../../assets/crown.svg';
// import './navigation.styles.jsx'
import CartIcon from "../../cart-icon/cart-icon.compnents";
import CartDropdown from "../../dropdown/cart-dropdown.component";
import { useContext } from "react"; 
import { CartContext } from "../../../contexts/cart.context";
import { NavigationContainer, LogoContainer , NavLinksContainer, NavLink} from "./navigation.styles.jsx";
//import './navigation.styles.scss';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
       <NavigationContainer>
        <LogoContainer to='/'>
        <MyLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink  to='/tour'>TOURS</NavLink>
        
          <CartIcon />
        </NavLinksContainer>
    
        {isCartOpen && <CartDropdown />}
      </NavigationContainer> 
      {/* <div className="navigation">
        
      </div> */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;