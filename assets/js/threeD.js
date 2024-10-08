import * as THREE from 'three';



        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.ConeGeometry( 5, 20, 32 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        const cone = new THREE.Mesh(geometry, material ); scene.add( cone );
        
        const container = document.querySelector('.scene-container');
        renderer.setSize(container.clientWidth, container.clientHeight);
        
        // Append the renderer's canvas to the div
        container.appendChild(renderer.domElement);


        // Position the camera
        camera.position.z = 20;

        renderer.render(scene, camera);