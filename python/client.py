import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('connected')

sio.connect('http://localhost:3000')

promp = input()
while promp != 'q':
    sio.emit('msg', promp)
    promp = input()

sio.disconnect()
exit()