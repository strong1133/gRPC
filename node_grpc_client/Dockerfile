FROM node:14
MAINTAINER strong3879 <strong3879@gmail.com>

RUN mkdir -p /app
# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /app
# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /app

# npm install 을 실행
RUN npm install --production

#환경변수 NODE_ENV 의 값을 production 로 설정
#ENV NODE_ENV="production"

#가상 머신에 오픈할 포트
EXPOSE 4000 4000

ARG BUILD_VERSION
ENV BUILD_VERSION $BUILD_VERSION

#컨테이너에서 실행될 명령을 지정
# CMD ["npm", "start"]\
ENTRYPOINT ["node", "./bin/www"]



