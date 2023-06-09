import { styled } from "styled-components";
//import { Styled } from "styled-components/dist/constructors/constructWithOptions";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div
`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`
export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const NavLink = styled (Link)`
      padding: 10px 15px;
      cursor: pointer;
`
// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }


// .navigation {
//   margin-left: 5%;
//   margin-top: 10%;
//    height: 70px;
//   width: 100%;
//   display: inline;
  
//   // display: flex;
//   // justify-content: space-between;
//   // margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//     display: inline;
//     margin-top: 40px;
//   }

//   .nav-links-container {
//     width: 100%;
//     height: 100%;
//     display: inline-flex;
//     margin-left: 80%;
//     // align-items: center;
//     //justify-content: flex-end;

//     .nav-link {  
//       padding: 10px 15px;
//       cursor: pointer;
//     }

//     .cart-icon-container {
//       width: 45px;
//       height: 45px;
//       position: relative;
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
    
//       // .shopping-icon {
//       //   width: 24px;
//       //   height: 24px;
//       // }
//       .item-count {
//         position: relative;
//         font-size: 10px;
//         font-weight: bold;
//         bottom: 12px;
//         display: inline;
//       }
//     }
    
//    }
// }
