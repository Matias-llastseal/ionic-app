import React, { useState } from 'react';
const { IonButton } = require('@ionic/react');

const OBSWebSocket2 = () => {

    const OBSWebSocket = require('obs-websocket-js');
    const obs = new OBSWebSocket();

    obs.connect({
            address: '192.168.100.10:4444',
            password: 'mat.altamirano'
        })
        .then(() => {
            console.log(`Success! We're connected & authenticated.`);
     
            return obs.send('GetSceneList');
        })
        .then(data => {
            console.log(`${data.scenes.length} Available Scenes!`);
    
            obs.send('SetCurrentScene', {
                'scene-name': data.scenes[0].name
            });
     
            /*data.scenes.forEach(scene => {
                if (scene.name !== data.currentScene) {
                    console.log(`Found a different scene! Switching to Scene: ${scene.name}`);                  
                }
            });*/
        })
        .catch(err => { // Promise convention dicates you have a catch on every chain.
            console.log(err);
        });
     
    obs.on('SwitchScenes', data => {
        console.log(`New Active Scene: ${data.sceneName}`);
    });
     
    // You must add this handler to avoid uncaught exceptions.
    obs.on('error', err => {
        console.error('socket error:', err);
    });

  return (
    <div className="container">
      
    </div>
  );
  
};

export default OBSWebSocket2;