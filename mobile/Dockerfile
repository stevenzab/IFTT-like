FROM cirrusci/flutter:3.3.3

WORKDIR /mobile

COPY . .

RUN flutter pub upgrade

RUN flutter pub get

CMD ["flutter", "build", "apk"]