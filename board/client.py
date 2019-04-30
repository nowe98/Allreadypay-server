import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('localhost', 3001))
data = s.recv(1024)
s.close()
print('Received', repr(data))
