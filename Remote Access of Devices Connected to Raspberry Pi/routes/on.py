import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

GPIO.setup(18, GPIO.OUT)

try:
	GPIO.output(18, GPIO.HIGH)
	print("LED is on")

except KeyboardInterrupt:
	GPIO.cleanup()
