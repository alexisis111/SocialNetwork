

let initialState = {


    music: [
        { id: 1, url: 'https://s07myt.storage.yandex.net/get-mp3/3b88dfd5fe8f60b218d45c367a224611/0005e72a664804fc/rmusic/U2FsdGVkX1_HrM1nG9a7fz469V7b3dFtKgMM42-6yol6d6t_WLIiJv2deE9M47lzuwoE9ZiBxl9ScwnXCUB-y4ib2YMFB5g7-8g54Sr2g6Y/a684b2a037285d502fe0360fbbc670fe71e38533851332bc9ed9add0661af7ed/29499?track-id=105974495&play=false', title: 'CO-2', avatar: 'https://avatars.yandex.net/get-music-content/6214856/1c6ba060.a.23028829-1/50x50' },
        { id: 2, url: 'https://s200vla.storage.yandex.net/get-mp3/caf458a7d21c678e5173e913cfd1e4c5/0005e729cb8a10ba/rmusic/U2FsdGVkX1-pAqoBqMNPRUqRiX8JgLOFX8se8b7VGbGTaSX1YY4YBdH86jvZTh5emf0AeBBu18TKCTWFAqvVqFyjHo-aEOEsATJTLpi3DM8/70640c9fe88dc48116688018a353ec58c1bde44a80c547137d4a81786eb186a3/25779?track-id=70076908&play=false', title: 'Unvaulted', avatar: 'https://avatars.yandex.net/get-music-content/6255016/e85f59d8.a.23106098-1/50x50' },
        { id: 3, url: 'https://s299myt.storage.yandex.net/get-mp3/a624e84d6fa2b032fe4f53db69b59933/0005e729d4208560/rmusic/U2FsdGVkX1-wrJSFpk7LXYBZRmRTJXP9I49yz72SFQzOoG0c1s6X4o4OY4vwZeHd26tahDFHbQC2rMltaXPkHReN0l5XXRRfbcjX5Oh9R14/8e1af08c84946a766a3eec09ec2b627840ee72f9f84cac978f59ae3ad3ebfc9e/24495?track-id=106020424&play=false', title: 'Changing', avatar: 'https://avatars.yandex.net/get-music-content/6202531/2b613c4e.a.23043831-1/50x50' },
        { id: 4, url: 'https://s07myt.storage.yandex.net/get-mp3/3b88dfd5fe8f60b218d45c367a224611/0005e72a664804fc/rmusic/U2FsdGVkX1_HrM1nG9a7fz469V7b3dFtKgMM42-6yol6d6t_WLIiJv2deE9M47lzuwoE9ZiBxl9ScwnXCUB-y4ib2YMFB5g7-8g54Sr2g6Y/a684b2a037285d502fe0360fbbc670fe71e38533851332bc9ed9add0661af7ed/29499?track-id=105974495&play=false', title: 'CO-2', avatar: 'https://avatars.yandex.net/get-music-content/6214856/1c6ba060.a.23028829-1/50x50' },
        { id: 5, url: 'https://s200vla.storage.yandex.net/get-mp3/caf458a7d21c678e5173e913cfd1e4c5/0005e729cb8a10ba/rmusic/U2FsdGVkX1-pAqoBqMNPRUqRiX8JgLOFX8se8b7VGbGTaSX1YY4YBdH86jvZTh5emf0AeBBu18TKCTWFAqvVqFyjHo-aEOEsATJTLpi3DM8/70640c9fe88dc48116688018a353ec58c1bde44a80c547137d4a81786eb186a3/25779?track-id=70076908&play=false', title: 'Unvaulted', avatar: 'https://avatars.yandex.net/get-music-content/6255016/e85f59d8.a.23106098-1/50x50' },
        { id: 6, url: 'https://s299myt.storage.yandex.net/get-mp3/a624e84d6fa2b032fe4f53db69b59933/0005e729d4208560/rmusic/U2FsdGVkX1-wrJSFpk7LXYBZRmRTJXP9I49yz72SFQzOoG0c1s6X4o4OY4vwZeHd26tahDFHbQC2rMltaXPkHReN0l5XXRRfbcjX5Oh9R14/8e1af08c84946a766a3eec09ec2b627840ee72f9f84cac978f59ae3ad3ebfc9e/24495?track-id=106020424&play=false', title: 'Changing', avatar: 'https://avatars.yandex.net/get-music-content/6202531/2b613c4e.a.23043831-1/50x50' },
        { id: 7, url: 'https://s07myt.storage.yandex.net/get-mp3/3b88dfd5fe8f60b218d45c367a224611/0005e72a664804fc/rmusic/U2FsdGVkX1_HrM1nG9a7fz469V7b3dFtKgMM42-6yol6d6t_WLIiJv2deE9M47lzuwoE9ZiBxl9ScwnXCUB-y4ib2YMFB5g7-8g54Sr2g6Y/a684b2a037285d502fe0360fbbc670fe71e38533851332bc9ed9add0661af7ed/29499?track-id=105974495&play=false', title: 'CO-2', avatar: 'https://avatars.yandex.net/get-music-content/6214856/1c6ba060.a.23028829-1/50x50' },
        { id: 8, url: 'https://s200vla.storage.yandex.net/get-mp3/caf458a7d21c678e5173e913cfd1e4c5/0005e729cb8a10ba/rmusic/U2FsdGVkX1-pAqoBqMNPRUqRiX8JgLOFX8se8b7VGbGTaSX1YY4YBdH86jvZTh5emf0AeBBu18TKCTWFAqvVqFyjHo-aEOEsATJTLpi3DM8/70640c9fe88dc48116688018a353ec58c1bde44a80c547137d4a81786eb186a3/25779?track-id=70076908&play=false', title: 'Unvaulted', avatar: 'https://avatars.yandex.net/get-music-content/6255016/e85f59d8.a.23106098-1/50x50' },
        { id: 9, url: 'https://s299myt.storage.yandex.net/get-mp3/a624e84d6fa2b032fe4f53db69b59933/0005e729d4208560/rmusic/U2FsdGVkX1-wrJSFpk7LXYBZRmRTJXP9I49yz72SFQzOoG0c1s6X4o4OY4vwZeHd26tahDFHbQC2rMltaXPkHReN0l5XXRRfbcjX5Oh9R14/8e1af08c84946a766a3eec09ec2b627840ee72f9f84cac978f59ae3ad3ebfc9e/24495?track-id=106020424&play=false', title: 'Changing', avatar: 'https://avatars.yandex.net/get-music-content/6202531/2b613c4e.a.23043831-1/50x50' },
        
    ]
}


const MusicReduser = (state = initialState) => {
    return state;
}



export default MusicReduser;
