import React, { useRef } from 'react';

import { platform, IOS, File } from '@vkontakte/vkui';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24CameraOutline from '@vkontakte/icons/dist/24/camera_outline';

import './FileUpload.css';

const osName = platform();

const FileUpload = () => {

    return (
        <div className="Purposed__file-block">
            <File
                className="Purposed__file-block Purposed__file-button"
                mode="secondary"
                size="xl"
                before={osName === IOS ? <Icon28PictureOutline /> : <Icon24CameraOutline />}
            >
                Загрузить обложку
            </File>
        </div>
    );
}

export default FileUpload;