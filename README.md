### GET STARTED

run `sh install.sh` or `./install.sh` in root folder

### Develop

### EXTRA

`npm run dev`
will run ng serve to start development for angular and start nodejs typescript server concurrently,
it will also build the project into server/dist whenever frontend/angular application is changed.

---

`npm run dev-https`
will execute npm _run dev but_ backend with https instead.
you would have to generate keys in /server/security like following

openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

---

`npm run backend`
will start the server

---

`backend-https`
will start the server in https mode

`tns device android --available-devices`

`tns run android --device <Device ID>` Phone

`tns run android` Emulator
