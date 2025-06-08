var APP_DATA = {
  "scenes": [
    {
      "id": "0-r_sofa",
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
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.4310286843722082,
        "pitch": 0.12208607719577458,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.7760840610435675,
          "pitch": 0.10999463268095866,
          "rotation": 0,
          "target": "2-door_corner"
        },
        {
          "yaw": -2.400486138502826,
          "pitch": 0.09559587711819084,
          "rotation": 0,
          "target": "1-l_sofa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-l_sofa",
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
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.9688327971674511,
        "pitch": 0.012546640817312493,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4380137293281745,
          "pitch": 0.018886699051899214,
          "rotation": 0,
          "target": "2-door_corner"
        },
        {
          "yaw": -0.19485542138918177,
          "pitch": -0.002889910895511605,
          "rotation": 0,
          "target": "0-r_sofa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-door_corner",
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
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -2.299463851662278,
        "pitch": 0.055205219596182076,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.9180603691444045,
          "pitch": -0.04361025672604413,
          "rotation": 0,
          "target": "0-r_sofa"
        },
        {
          "yaw": -2.454657765045093,
          "pitch": -0.03158562339466009,
          "rotation": 0,
          "target": "1-l_sofa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Room_tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
