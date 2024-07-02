//@ts-ignore
import {Scene,Entity} from 'aframe-react';
import sky from "./models/sky.png";
import React from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
//@ts-ignore
import starwars from "./models/the_force_awakens_lowpoly.glb"


export function App(){
    const loader = new GLTFLoader()
    loader.load(starwars,(d)=>{
        const entity : any = document.getElementById("landscape");

        entity.object3D.add(d.scene)
    })
    return <div>
        <Scene>
            <Entity primitive='a-assets'>
                <img id="sky" src={sky} alt="stars"/>

            </Entity>
            <Entity id="landscape" gltf-model="url('./models/club.glb')" position={{x:0,y:0,z:0}} scale="0.2 0.2 0.2"></Entity>
            <Entity primitive='a-sky' color="FFFFFF" material="src:#sky" rotation={{x:0,y:0,z:0}}/>
        </Scene>
    </div>
}
