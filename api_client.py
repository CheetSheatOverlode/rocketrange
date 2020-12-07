from requests_html import HTMLSession
import requests

session = HTMLSession()
r = session.get(f"http://thisisrocketscience.live/api/{float(input('Enter Orbit Height (km): '))}")
orbitSpeed = r.html.find("#orbitSpeed", first=True)
orbitTime = r.html.find("#orbitTime", first=True)
escapeVelocity = r.html.find("#escapeVelocity", first=True)
print("Orbit Speed (m/s): ", orbitSpeed.text, "\nOrbit Time (seconds): ", orbitTime.text, "\nEscape Velocity (m/s): ", escapeVelocity.text)
input()