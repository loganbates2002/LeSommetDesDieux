import cv2
from flask import jsonify
import sys
import numpy as np
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
#testArr = []
#xAxis = 0
#yAxis = 0
#axisArray = []
class VideoCamera(object):
  def __init__(self):
    self.video = cv2.VideoCapture(0)
    
  #must delete webcam otherwise the webcam will become "trapped" and you cannot use it for other apps until computer restart
  def __del__(self):
    self.video.release()
    
  # geting the frame and converting it to jpeg format
  def get_frame(self):
    success, frame = self.video.read()
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x,y,w,h) in faces:
      cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),3)
      #xAxis = x
      #yAxis = y
      #axisArray = [xAxis,yAxis]
      break #exit loop after rendering one face
    #sys.stdout.write(faces)
    ret, jpeg = cv2.imencode('.jpg', frame)
    return jpeg.tobytes()

  #def get_axis(self):
  #  success, frame = self.video.read()
  #  gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
  #  
  #  axisArr = []
  #  faces = face_cascade.detectMultiScale(gray, 1.3, 5)
  #  for (x,y,w,h) in faces:
  #    axisArr = [
  #        { 'a': x, 'b': y },
  #        { 'a': w, 'b': h }
  #    ]
  #    break #exit loop after rendering one face
#
  #  return jsonify(results = axisArr)