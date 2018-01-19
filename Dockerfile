FROM resin/raspberry-pi-node:6-slim

RUN apt-get update -q && apt-get install curl
# Install the UV4L PPA
RUN curl -s http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc | sudo apt-key add - &&\
  sed -i '1s;^;deb http://www.linux-projects.org/listing/uv4l_repo/raspbian/ jessie main\n;' /etc/apt/sources.list

# Install dependencies as well as the proper version of uv4l-webrtc
RUN apt-get update -q &&\
  apt-get install -yq \
    uv4l \
    uv4l-demos \
    uv4l-dummy \
    uv4l-mjpegstream \
    uv4l-raspicam \
    uv4l-raspicam-extras \
    uv4l-raspidisp \
    uv4l-server \
    uv4l-uvc \
    uv4l-xmpp-bridge \
    uv4l-xscreen \
    uv4l-webrtc$([ $(uname -m) = armv6l ] && echo -armv6) \
    vlc \
    wget \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Move to app dir
WORKDIR /usr/src/app

# Configure env vars
ENV CONF_DIR=/data/config/ \
  INITSYSTEM=on

# Copy package json first so that when other things change we don't 
# reinstall deps
COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*
RUN npm link

# Now copy our app
COPY ./ /usr/src/app

RUN systemctl disable uv4l_raspicam

# Start app
CMD ["node", "package/index.js"]
