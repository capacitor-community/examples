import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Plugins, CameraResultType } from '@capacitor/core';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import Icon from 'preact-material-components/Icon';

export default function CameraPage() {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    const imageUrl = image.webPath;
    setPhoto(imageUrl);
  };
  return (
    <div class="page">
      <h1>Camera</h1>
      <div>{photo ? <img src={photo} /> : null}</div>
      <Button onClick={() => takePhoto()}>
        <Icon>camera_alt</Icon> Take Photo!
      </Button>
    </div>
  );
}
