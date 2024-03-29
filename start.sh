#!/bin/bash

echo "starting resin-wifi-connect"
# Start resin-wifi-connect
export DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket

ip route | grep default

if [ $? -eq 0 ]; then
    printf 'Skipping WiFi Connect\n'
else
    printf 'Starting WiFi Connect\n'
    /usr/src/app/wifi-connect
fi

echo "starting huggin"
npm start
