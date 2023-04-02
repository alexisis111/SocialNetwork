import { connect } from 'react-redux';
import Music from './music';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        music: state.music,
    }
}

let authRedirectComponent = withAuthRedirect(Music)


const MusicContainer = connect(mapStateToProps)(authRedirectComponent)

export default MusicContainer;
