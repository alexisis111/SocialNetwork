import React from 'react';
import StoreContext from '../../../../storeContext';
import c from './description.module.css';
const Description = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().profilePage;
                    return <div className={c.description}>
                        <div>
                            <img src={state.profileImg[0].url} alt="" />
                        </div>
                        <div className={c.descriptionInfo}>
                            <h3>Alex Gilev</h3>
                            <p>Date of birth : 17.10.1991</p>
                            <p>City : Gnch</p>
                            <p>Education : School</p>
                        </div>
                    </div>
                }
            }
        </StoreContext.Consumer>
    );
}

export default Description;
