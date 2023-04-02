import { connect } from 'react-redux';
import Nav from './nav';


const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}



const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;