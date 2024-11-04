FROM node:22.11.0

RUN \
	set -x \
	&& apt-get update \
	&& apt-get install -y build-essential python3-pip

RUN mkdir -p /code
WORKDIR /code
COPY . /code

RUN npm install

CMD ["npm", "start"]

