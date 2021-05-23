---
name: Robotic Sink
year: 2020
description: A robotic sink for an architectural robotics class that is designed to help users wash dishes
image: "assets/images/sink.jpg"
---
# {{ page.name }}
<img class="img-fluid" alt="{{ page.name }}" src="{{ page.image | relative_url }}">
- This project was designed and built in four weeks for ECE 8680: Architectural
Robotics at Clemson University.
- I designed a sink faucet that uses a standard vinyl hose as a continuum
manipulator. Motors at the base of the faucet adjust the lengths of three
tendons that pass through the pipe to the end of the hose. This version of the
sink is controlled with a simple wired joystick.
- The purpose of this project is partly to explore how a sink could help someone
in a kitchen. Another purpose is to explore moving fluids through a continuum
manipulator for upcoming research.
- The tendon strings pass through collars along the length of the hose. The
collars are 3D printed and adhered to the hose with Loctite Vinyl adhesive.
- The inlet of the hose is connected to a solenoid valve which in turn is
connected to a garden hose. The hose passes through a custom-bent PVC pipe and
is secured at the end to prevent rotation inside the pipe.
- The PVC pipe was bent using this method where hot sand is poured into the pipe.
The sand softens the PVC and supports it as it is bent into the desired shape
using a jig. This helps to prevent kinking in the pipe.
- The base of the tendon strings are attached to capstans (winches) that spool and
unspool the strings to change the lengths of the tendons.
- The three tendon motors are driven by three DC motor drivers which are in turn
controlled by an ATmega2560.
- For now, instead of using proper continuum kinematics, I faked it by
interpolating between tendon lengths. I projected the input vector from the
joystick onto each of three tendon length output vectors where each output
vector is rotated 120°.
- Future research may include adding computer vision, flow measurement, and
interoperability with other assistive robots.
