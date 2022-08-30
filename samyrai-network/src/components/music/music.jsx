import React from 'react';

const Music = (props) => {

    return (
        <div>
            <div>
                {props.music.music.map(m =>
                    <div key={m.id}>
                        <span>
                            <img src={m.avatar} alt="" />
                            <audio src={m.url} controls />
                            {m.title}
                        </span>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Music;
