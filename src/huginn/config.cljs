(ns huginn.config)

(def default-options
  {:projectId (or js/process.env.GCLOUD_PROJECT js/process.env.GCLOUD_PROJECT "grownome")
   :cloudRegion "us-central1"
   :registryId (or js/process.env.REGISTRY_ID "nomes")
   :deviceId  (or js/process.env.DEVICE_ID "test-device")
   :privateKeyFile (or js/process.env.PRIVATE_KEY_FILE "rsa_private.pem")
   :privateKey js/process.env.PRIVATE_KEY
   :algorithm "RS256"
   :tokenExpMins 25
   :delayMs (* 1000 30)
   :mqttBridgeHostname "mqtt.googleapis.com"
   :mqttBridgePort 8883
   :messageType "events"})

