# huginn
[![Build Status](https://semaphoreci.com/api/v1/projects/7c44d63d-d849-48b8-931a-dbc26992e7de/1720882/badge.svg)](https://semaphoreci.com/grownome/huginn)
[![Maintainability](https://api.codeclimate.com/v1/badges/1171a7ff88012d0da731/maintainability)](https://codeclimate.com/repos/5a6238304cc1281032000fad/maintainability)


A clojure service to run on IOT devices and push metrics into pyroclast for processesing.

## Usage

Deploy on to a raspberry pi to get it to push data to google mqtt gateway.
Currently configuration is exposed through environment variables is huginn.config/default-options

## Why not do something simpler
The simpest thing we could imagine doing was to have the devices push directly to pyroclast, no intermidate service. It turned out to have two issues. 1. Pyroclast does not support lots of API keys. 2. Java made the devices sad.

Martz pointed out https://openpipekit.github.io/index.html#!README.md
which might be an interesting building block for pushing to DAT, and allowing users to control their own data. 


## Config
* `GCLOUD_PROJECT`  The project ID from google cloud
* `HIDDEN  :cloudRegion` This is hardcoded At the moment to "us-central1"
* `REGISTRY_ID`      The google cloud IOT gateway registry this device is  in
* `DEVICE_ID`       The device id in google cloud registry for this device. MUST MATCH GOOGLE CLOUD
* `PRIVATE_KEY_FILE` If no private key is in the environmnet under PRIVATE_KEY huginn will try to read this
* `PRIVATE_KEY`     Huginn will try to use this key to sign packet so MQTT. It's a bit of an odd format though, replace all the newlines with spaces.
*  `:algorithm "RS256"`  Hardcoded, make sure you keys are RSA256_X509 
*  `:tokenExpMins 20`    Hardcoded. This requires the token to renew every 20 minutes
*  `:delayMs (* 1000 60)` Only send packets once a second
*  `:mqttBridgeHostname "mqtt.googleapis.com"` Hardcoded to google
*  `:mqttBridgePort 8883` Hardcoded to standard MQTT port
*  `:messageType "events"`  Not used should be deleted})

## How it works
First, a JWT token is created using `REGISTRY_ID`, `DEVICE_ID`, `GCLOUD_PROJECT`, and `PRIVATE_KEY`.
This is controled by `huginn.mqtt/init-client` which then waits for a client to finish connecting to google.
Once it has main control of the program is drivien by `huginn.mqtt/system-function` (it has some documentaion). This function will start up a few channels and processes. 
*  Publisher, this takes the items from the send channel and publishes them to mqtt
*  `huginn.mqtt/tele-chan`  this is a channel of system telemetry data that can be inspected or have more added to it
* Client-refresher, This makes sure that the client always has an up to date token
* recv-channel, This is initilized with the init-client function and recives any messages sent to the device, this will be where config info is passed.
* tele-send, this enriches the telemetry data with QOS info (which determines the garentees around message dilivery; 0 is at least 1 maybe, 1 is exactly 1 time, 2 is  at least 1 time for sure... should improve this with a link to googles docs on it)
* state-send, this sends any state passed on the state-chan over the network.

the idea is that you can use the response from system-function to do all of your work, no need to digg around the mqtt api... hopefully.

After doing some reading on the docs. 
Tele-chan (or the events topic) is for what your device *is* doing
State-chan (or the state topic) is for what your device *thinks* it should be doing
Config (on the recv channel) is for google cloud to communicate with the device about 
what it should be doing.

Google IOT offers tools to compare you state with previous states as the config changes
and seems to silently fail if you put binary data on to the state channel.


## Getting it to run
If you are using spacemacs:
* `SPC m s i` to start a repl
* `(fig-start)` to start the autocompiler (on every saved change)
* `(cljs-repl)` to start the clojure script repl listener
* `node target/js/compiled/huginn.js` run this in a terminal by your text editor. This starts up a node server that figwheel injects code into. This helps with performace, keeping you environment from falling apart if you evaluate something bad, and eventually will allow us to inject code on to running devices. Once everything start your repl should work.
* `(figwheel-sidecar.repl-api/switch-to-build :dev)` will switch the build to dev or test in the clj repl


## Buliding it
Use semaphore if you want to deploy it to the board. Just make a pull request and when it's merged it wil be automatically deployed to the devices.

If you want to do a build locally use
`shadow-cljs release prod`

To push to resin, after you have run  the build command and  checked in the result to git 
you want to run

`git push resin YOUR_BRANCH_NAME:master`

## Running tests
Eventually figwheel will auto build tests for us... but until then
`lein doo node test auto` if you want it to run in the background testing every time you change something
`lein doo node test once` If you just want it to run once.


## pushing locally
`lein cljsbuild auto prod` in terminal 1
when the build is finished and you want to push to the device do
`resin sync --skip-gitignore` this will ask for what device you want to push to.
`resin logs -t`

## if your stuck
You can change the dockerfile.template CMD line (the bottom)
to have "--inspect", "IP_ADDRESS_DEVICE:9229" after "node"
then you can use about:inspect in chrome to connect to it.
Just make sure you remove it before mergeing to master because it's really really slow.

## Resin
To push to a single resin device with out going through the resin build process (by pushing to resin.io)
`lein cljsbuild prod once && resin sync` This will build a release then resin will grab it and copy just that file onto the device that you select.


## If it's broken
`lein clean` This will blow away your build cache and npm cache, so everything will
be downloaded again.

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
