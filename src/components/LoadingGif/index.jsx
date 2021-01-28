import React from 'react';
import { Widget } from '../Widget';

function LoadingGif() {
  return (
    <Widget>
      <Widget.Content>
        <div style={{ textAlign: 'center', height: '150px', margin: '90px auto auto'}}>
          <img height="50px" width="50px" src="/loading/loading.gif" />
        </div>
      </Widget.Content>
    </Widget>
  );
}

export default LoadingGif;

