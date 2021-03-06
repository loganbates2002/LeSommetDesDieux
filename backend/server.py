from flask import Flask, render_template, Response
from camera import VideoCamera
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder='../../frontend/src')
CORS(app)

def index():
    return render_template('index.html')
    
def gen(camera):
    while True:
        frame = camera.get_frame()
        # creates html render template
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
  
@app.route('/video_feed', methods=["GET"])
def video_feed():
    response = jsonify(message="Simple server is running")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame') #explains the type of response the html is receiving and sending it to the browser

  
# initialize the server to run the flask app on, debug mode means you do not need to close and reopen the server to see changes
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='4999')
