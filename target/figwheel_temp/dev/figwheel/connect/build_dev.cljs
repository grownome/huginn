(ns figwheel.connect.build-dev (:require [huginn.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://127.0.0.1:3449/figwheel-ws"})

