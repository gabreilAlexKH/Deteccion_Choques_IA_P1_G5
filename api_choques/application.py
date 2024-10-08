from flask import Flask , send_file , request
from flask_restful import Resource, Api 
from flask_cors import CORS
import json

import random

import os

app = Flask(__name__)
api = Api(app)
CORS(app)

#Aqui impoerten el modelo


#Aqui va una funcion para pre procesar
def preprocess(foto):

    foto_prosesadas = foto

    return foto_prosesadas

#Aqui ca una funcion para prececir
def predict(foto_prosesadas):

    label = random.randint(0, 2)
    return label

def get_image(nombre):

    counter = 0
    img_dir = "./images"
    img_list = os.listdir(img_dir)

    for foto in img_list:
        if foto == nombre:
            img_path = os.path.join(img_dir, foto)
            return img_path 
        counter+=1

    return None 

def get_folder_count():
    img_dir = "./images"
    img_list = os.listdir(img_dir)
    return len(img_list)

def get_extension(filename):

    return filename.rsplit('.', 1)[1].lower()

def save_foto(file):

    img_dir = "./images"
    n = get_folder_count() + 1
    extension = get_extension(file.filename)
    foto_name = str(n) + "." + str(extension)

    file.save(os.path.join(img_dir , foto_name))

    return foto_name


class Detector(Resource):
    def post(self):

        foto_file = request.files.getlist('foto')[0]
        foto_name = save_foto(foto_file)
        foto_procesada = preprocess(foto_name)

        int_label = predict(foto_procesada)

        label = "None"
        foto = "None"

        print(int_label)

        if int_label == 0:
            label ="NoAcciednt"
        
        elif  int_label == 1:
            label ="Accident"

        elif  int_label == 2:
            label = "severe"

        return {'label': label, "foto": foto_name}


class Image(Resource):
    def get(self , nombre):
        image = get_image(nombre)

        if image is None:
            return None
        
        return send_file(image, mimetype='image/')

 
api.add_resource(Detector, '/modelo/')
api.add_resource(Image, '/images/<string:nombre>')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5005)