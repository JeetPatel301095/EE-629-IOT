import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

GPIO.setup(18, GPIO.OUT)

GPIO.output(18, GPIO.LOW)
print("LED is off")
GPIO.cleanup()
