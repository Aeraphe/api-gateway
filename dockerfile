FROM node:10.16.0

# RUN useradd --user-group --create-home --shell /bin/false app &&\ npm install --global npm

ENV HOME=/home/app

COPY   package.json  $HOME/api-gateway/

# RUN chown -R app:app $HOME/*

WORKDIR $HOME/api-gateway


RUN npm install

RUN npm shrinkwrap

# USER root

COPY . $HOME/api-gateway


# CMD ["npm","run dev"]