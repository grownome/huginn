(ns huginn.config)

(def default-options
  {:projectId (or js/process.env.GCLOUD_PROJECT js/process.env.GCLOUD_PROJECT "grownome")
   :cloudRegion "us-central1"
   :registryId (or js/process.env.REGISTRY_ID "nomesDev")
   :deviceId  (or js/process.env.DEVICE_ID "local-tester")
   :privateKeyFile (or js/process.env.PRIVATE_KEY_FILE "rsa_private_local-tester.pem")
   :privateKey js/process.env.PRIVATE_KEY
   :algorithm "RS256"
   :tokenExpMins 25
   :userId (or js/process.env.USER_ID "0")
   :dht11Delay (* 60 1000 2)
   :delayMs (* 1000 30)
   :mqttBridgeHostname "mqtt.googleapis.com"
   :mqttBridgePort 8883
   :messageType "events"})

