FROM node

RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee /etc/apt/sources.list.d/webupd8team-java.list && \
echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list && \
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886 && \
apt-get update -y && \
apt-get install oracle-java8-installer -y

RUN npm install -g @angular/cli

COPY . .

RUN cd /back/mercadolibre && ls && chmod +x mvnw

RUN mvnw spring-boot:run &> log.txt

RUN cd /front/mercadolibre && ls && npm install

EXPOSE 3001

WORKDIR /front/mercadolibre

CMD ng serve