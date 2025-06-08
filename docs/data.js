var APP_DATA = {
  "scenes": [
    {
      "id": "0-door_corner",
      "name": "door_corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.4151283094242224,
        "pitch": 0.12710081186309097,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.9192804817973297,
          "pitch": -0.006636214298016085,
          "rotation": 0,
          "target": "1-r_sofa"
        },
        {
          "yaw": -2.4268037887551657,
          "pitch": -0.007578699772452069,
          "rotation": 0,
          "target": "2-l_sofa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-r_sofa",
      "name": "r_sofa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5239143435826463,
        "pitch": 0.1731436432789124,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.453829325848446,
          "pitch": 0.1933659467112374,
          "rotation": 0,
          "target": "2-l_sofa"
        },
        {
          "yaw": -0.7250584111350094,
          "pitch": 0.12765782040179197,
          "rotation": 0,
          "target": "0-door_corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-l_sofa",
      "name": "l_sofa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1356100657929087,
        "pitch": 0.06821009346793616,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4294959013489912,
          "pitch": -0.0022668436409212234,
          "rotation": 0,
          "target": "0-door_corner"
        },
        {
          "yaw": -0.10632443376960943,
          "pitch": -0.011564282299428186,
          "rotation": 0,
          "target": "1-r_sofa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "room_tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
