## T-SAMMANS

- Winner Good tech hack best technical solution and Winner of good tech hack best user experience
  ![image](https://user-images.githubusercontent.com/43444902/75106591-a1190300-561e-11ea-9289-61dde0b9a774.jpg)

### Concept

Premises owners can announce their premises where they describe what can be done in them (football, badminton etc..). Users can choose between the different activities that can be done within the premises, choose one of this activities and after that other users can apply for this activity/event. The venue of the premises should have a fixed price, where the one who created the activity/event can specify how many people must participate in the activity as well as how many who are allowed to participate at most, who of course must not exceed the ownership of the premises rules. This means that people that applies for an event can split the final sum of the premises, the smallest price will be the total price of the premises / maximum user, and the highest cost will be the (premises)/ (minimum users)! People identify themselves with Swedish "Mobilt Bank ID" in order to solve the security and safe aspect. The activities doesn't have to be on premises, the activities can also be somewhere in the nature or other public spaces. The application is supposed to bring people of any kind together that similar interests. 

### Contributors

- Herman Jansson
- Mattias Gustin
- Jamal Saeed
- Joachim Sjövall
- Asfand Malik

### Pitch

- Joachim Sjövall
- Jamal Saeed

### Prototype

- Mattias Gustin
  ![prototyp](https://user-images.githubusercontent.com/43444902/75106456-31eedf00-561d-11ea-84c9-8a8bf46f5852.png)

### Product

- Herman Jansson

The development took place within less than 24 hours and this is what it can do so far:
Support for Swedish Mobile Bank ID to login and identify a profile, creating events, finding events, adding events to its profile, removing events from profile, see whos participates within an event.

The project is using MEAN stack:

- Database (MongoDB)
- Backend Web Application framework (Expres.js)
- Frontend Web Application Framework (Angular)
- Backend logic with typescript (Node.js)

Log in with Mobile Bank Id:
--- 
![ab586f8228c224456a571937d5eb9ec7](https://user-images.githubusercontent.com/43444902/75108340-22719500-5621-11ea-9ed5-d7333f0bdf5a.gif)

Create event and find events and see who participates within it:
---
![e295d731f6eb69040b106f4ee4623250](https://user-images.githubusercontent.com/43444902/75109242-e5f26900-5621-11ea-97b0-a206cedc74eb.gif)

Join event and add it to profile:
---
![a72f91e4ae997df6605b937e5f71f4c7](https://user-images.githubusercontent.com/43444902/75109329-513c3b00-5622-11ea-82c8-8266cdf801f4.gif)

### Pictures

![image](https://user-images.githubusercontent.com/43444902/75106591-a1190300-561e-11ea-9289-61dde0b9a774.jpg)

![image1](https://user-images.githubusercontent.com/43444902/75106603-b1c97900-561e-11ea-84ea-070fcd45fe00.jpg)

![image2](https://user-images.githubusercontent.com/43444902/75106607-b7bf5a00-561e-11ea-90d3-cafee8c05ea3.jpg)

![image3](https://user-images.githubusercontent.com/43444902/75106609-bc840e00-561e-11ea-8569-63643afddd5f.jpg)

## GET STARTED

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

`openssl genrsa -out key.pem; openssl req -new -key key.pem -out csr.pem; openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem; rm csr.pem;`


