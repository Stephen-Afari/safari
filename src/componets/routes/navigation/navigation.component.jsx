import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
// import {ReactComponent as MyLogo} from '../../../assets/VirtualSpliceLogo3.PNG';
import {ReactComponent as MyLogo} from '../../../assets/crown.svg';
import './navigation.styles.scss'
import CartIcon from "../../cart-icon/cart-icon.compnents";
import CartDropdown from "../../dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const Navigation = () => {
  const {isCartOpen} = useContext(CartContext)
    return (
    <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <MyLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
          <Link className="nav-link" to='/tour'>TOURS</Link>
          <CartIcon />
          
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet />
        </Fragment>
    );
  };

  export default Navigation;