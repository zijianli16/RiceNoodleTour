const scrollamaVirus = scrollama();
// setup the instance, pass callback functions

scrollamaVirus
    .setup({
        step: ".step",
        debug: false,
        offset: 0
    })

    .onStepEnter(response => {
        // { element, index, direction }

        function changeCameraOrbit01_01() {

            let newIndex = response.index;
            let direction = response.direction;

            if (newIndex == 0 && direction == 'down') {
                $("#ricenoodle-model-viewer").attr("camera-controls","");
                document.getElementById("ricenoodle-model-viewer").setAttribute("camera-controls", "")
            }
        }

        changeCameraOrbit01_01();

        console.log("Entered");
        console.log(response.index);
        console.log(response.direction);

        // var newOrbit = document.getElementsByTagName('model-viewer')[0].getAttribute('camera-orbit');
        // console.log('newOrbit = ' + newOrbit);
    })

    .onStepExit(response => {
        // { element, index, direction }
        function changeCameraOrbit01_02() {

            let newIndex = response.index;
            let direction = response.direction;

            if (newIndex == 0 && direction == "down") {
                document.getElementById("ricenoodle-model-viewer").removeAttribute("camera-controls", "")
            }
            
        }

        changeCameraOrbit01_02();

        //console.log("Exit");
        //console.log(response.index);
        //console.log(response.direction);
    });

// setup resize event
window.addEventListener("resize", scrollamaVirus.resize);