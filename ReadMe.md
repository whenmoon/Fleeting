# Fleeting

<p align="center" >
<img src="https://i.ibb.co/2ZXWb67/logo.png" width="644" height="828" alt="logo">
</p>

*Fleeting: Adjective. Lasting for a very short time.*

The quality of communication in society is degrading because people lack the attention span required for deep connections. People increasingly favour text-based instant messaging over phone calls, and despite video call technology existing for almost two decades, its use is still not widespread. Yet text-based chat lacks many important aspects of communication, such as tone and body language.

At the same time, the corporate world has finally realised that endless meetings are an inefficient use of time, and responding with concepts such as stand-up meetings which are designed to reduce the length of meetings.


### The problem

People are choosing shallower forms of communication to avoid interactions that may be inefficient or overrun.


### The solution

Fleeting makes it possible to have focused, efficient meetings via time-limited video calls.


### Features

* Specify the length of the meeting from the outset, ranging from a few seconds to 10 minutes. The timer counts down and automatically cuts the call off at the allotted point.

* Fleetings do not have a selfie thumbnail, meaning the caller is not distracted by their own image.


### Benefits

* Shorter meetings with no possibility of overrun enforces discipline and sense of urgency, and reduces small-talk and non-relevant digressions that plague most meetings.

* A technology-enforced time limit is more reliable than a human-enforced time limit and avoids the need for awkward interactions.


### Uses

* Business meetings where focus is required

* Job interviews where many meetings may be lined up back-to-back

* Coaching or tutoring sessions with students where the student has paid for a specific time slot

* Calls with parents and other elderly relatives :D


## Getting Started

Try the deployed demo using two browser windows:


https://awesome-mcnulty-62c21e.netlify.com/


To clone and run locally:

`git clone https://github.com/whenmoon/Fleeting.git'

`cd call-server`

`npm install`

`node index.js`

`cd ../socket-server`

`npm install`

`node index.js`

`cd ../client` 

`npm install`

`npm start`

Run two instances of the client react app using the promoted ports in Chrome and open dev tools for both. Once the development server is running, choose any contact to call by clicking on the phone icon. Choose the length of call click 'start call' and except the incoming call on the second client.
