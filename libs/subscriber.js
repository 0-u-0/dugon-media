const Codec = require('./codec');
const rtpCapabilities = {
  "codecs": [
    {
      "name": "opus",
      "kind": "audio",
      "mimeType": "audio/opus",
      "clockRate": 48000,
      "channels": 2,
      "rtcpFeedback": [
        {
          "type": "transport-cc",
          "parameter": ""
        }
      ],
      "parameters": {},
      "preferredPayloadType": 100
    },
    {
      "kind": "video",
      "mimeType": "video/VP8",
      "clockRate": 90000,
      "rtcpFeedback": [
        {
          "type": "nack",
          "parameter": ""
        },
        {
          "type": "nack",
          "parameter": "pli"
        },
        {
          "type": "ccm",
          "parameter": "fir"
        },
        {
          "type": "goog-remb",
          "parameter": ""
        },
        {
          "type": "transport-cc",
          "parameter": ""
        }
      ],
      "channels": 1,
      "parameters": {
        "x-google-start-bitrate": 1000
      },
      "preferredPayloadType": 101
    },
    {
      "kind": "video",
      "mimeType": "video/rtx",
      "preferredPayloadType": 102,
      "clockRate": 90000,
      "channels": 1,
      "parameters": {
        "apt": 101
      },
      "rtcpFeedback": []
    },
    {
      "kind": "video",
      "mimeType": "video/VP9",
      "clockRate": 90000,
      "rtcpFeedback": [
        {
          "type": "nack",
          "parameter": ""
        },
        {
          "type": "nack",
          "parameter": "pli"
        },
        {
          "type": "ccm",
          "parameter": "fir"
        },
        {
          "type": "goog-remb",
          "parameter": ""
        },
        {
          "type": "transport-cc",
          "parameter": ""
        }
      ],
      "channels": 1,
      "parameters": {
        "profile-id": 2,
        "x-google-start-bitrate": 1000
      },
      "preferredPayloadType": 103
    },
    {
      "kind": "video",
      "mimeType": "video/rtx",
      "preferredPayloadType": 104,
      "clockRate": 90000,
      "channels": 1,
      "parameters": {
        "apt": 103
      },
      "rtcpFeedback": []
    },
    {
      "kind": "video",
      "mimeType": "video/H264",
      "clockRate": 90000,
      "parameters": {
        "packetization-mode": 1,
        "level-asymmetry-allowed": 1,
        "profile-level-id": "4d0032",
        "x-google-start-bitrate": 1000
      },
      "rtcpFeedback": [
        {
          "type": "nack",
          "parameter": ""
        },
        {
          "type": "nack",
          "parameter": "pli"
        },
        {
          "type": "ccm",
          "parameter": "fir"
        },
        {
          "type": "goog-remb",
          "parameter": ""
        },
        {
          "type": "transport-cc",
          "parameter": ""
        }
      ],
      "channels": 1,
      "preferredPayloadType": 105
    },
    {
      "kind": "video",
      "mimeType": "video/rtx",
      "preferredPayloadType": 106,
      "clockRate": 90000,
      "channels": 1,
      "parameters": {
        "apt": 105
      },
      "rtcpFeedback": []
    },
    {
      "kind": "video",
      "mimeType": "video/H264",
      "clockRate": 90000,
      "parameters": {
        "packetization-mode": 1,
        "level-asymmetry-allowed": 1,
        "profile-level-id": "42e01f",
        "x-google-start-bitrate": 1000
      },
      "rtcpFeedback": [
        {
          "type": "nack",
          "parameter": ""
        },
        {
          "type": "nack",
          "parameter": "pli"
        },
        {
          "type": "ccm",
          "parameter": "fir"
        },
        {
          "type": "goog-remb",
          "parameter": ""
        },
        {
          "type": "transport-cc",
          "parameter": ""
        }
      ],
      "channels": 1,
      "preferredPayloadType": 107
    },
    {
      "kind": "video",
      "mimeType": "video/rtx",
      "preferredPayloadType": 108,
      "clockRate": 90000,
      "channels": 1,
      "parameters": {
        "apt": 107
      },
      "rtcpFeedback": []
    }
  ],
  "headerExtensions": [
    {
      "kind": "audio",
      "uri": "urn:ietf:params:rtp-hdrext:sdes:mid",
      "preferredId": 1,
      "preferredEncrypt": false,
      "direction": "recvonly"
    },
    {
      "kind": "video",
      "uri": "urn:ietf:params:rtp-hdrext:sdes:mid",
      "preferredId": 1,
      "preferredEncrypt": false,
      "direction": "recvonly"
    },
    {
      "kind": "video",
      "uri": "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id",
      "preferredId": 2,
      "preferredEncrypt": false,
      "direction": "recvonly"
    },
    {
      "kind": "video",
      "uri": "urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id",
      "preferredId": 3,
      "preferredEncrypt": false,
      "direction": "recvonly"
    },
    {
      "kind": "audio",
      "uri": "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time",
      "preferredId": 4,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "video",
      "uri": "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time",
      "preferredId": 4,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "audio",
      "uri": "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01",
      "preferredId": 5,
      "preferredEncrypt": false,
      "direction": "recvonly"
    },
    {
      "kind": "video",
      "uri": "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01",
      "preferredId": 5,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "video",
      "uri": "http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07",
      "preferredId": 6,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "video",
      "uri": "urn:ietf:params:rtp-hdrext:framemarking",
      "preferredId": 7,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "audio",
      "uri": "urn:ietf:params:rtp-hdrext:ssrc-audio-level",
      "preferredId": 10,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "video",
      "uri": "urn:3gpp:video-orientation",
      "preferredId": 11,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    },
    {
      "kind": "video",
      "uri": "urn:ietf:params:rtp-hdrext:toffset",
      "preferredId": 12,
      "preferredEncrypt": false,
      "direction": "sendrecv"
    }
  ]
}

class Subscriber {
  constructor(receiver, producerId) {
    this.receiver = receiver;
    this.producerId = producerId;

    this.consumer = null;

    this.codec = null;
  }

  get id() {
    return this.consumer.id;
  }

  async init() {
    this.consumer = await this.receiver.transport.consume(
      {
        producerId: this.producerId,
        rtpCapabilities: rtpCapabilities,
        paused: false
      });
    
    //TODO: maintenance pubPaused by myself
    //TODO: use self random id
    this.codec = Codec.create(this.consumer.rtpParameters,this.consumer.producerPaused)

    this.consumer.on('producerclose', () => {
      // Remove from its map.
      this.onsenderclose();
    });
  }


  async pause() {
    await this.consumer.pause();
  }

  async resume() {
    await this.consumer.resume();
  }


  close() {
    this.consumer.close();
  }
}

module.exports = Subscriber;

