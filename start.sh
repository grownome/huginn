#!/bin/bash

echo "starting resin-wifi-connect"
# Start resin-wifi-connect
export DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket
/usr/src/app/resin-wifi-connect --clear=false

echo "starting huggin"
npm start
