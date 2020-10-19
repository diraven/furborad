FROM ubuntu

WORKDIR /app
RUN apt update && apt full-upgrade -y && apt install -y wget unzip
ENV FILENAME=kiwiirc_20.05.24.1_linux_amd64.zip
RUN wget https://kiwiirc.com/downloads/$FILENAME && unzip $FILENAME && rm $FILENAME
RUN mv kiwiirc_linux_amd64/* . && rmdir kiwiirc_linux_amd64
