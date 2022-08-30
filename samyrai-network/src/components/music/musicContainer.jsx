import { connect } from 'react-redux';
import Music from './music';


const mapStateToProps = (state) => {
    return {
        music: state.music
    }
}




const MusicContainer = connect(mapStateToProps)(Music)

export default MusicContainer;
