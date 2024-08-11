from flask import Flask
from flask_restful import Resource, Api
import random

app = Flask(__name__)
api = Api(app)


#Aqui impoerten el modelo


#Aqui va una funcion para pre procesar
def preprocess(foto):

    foto_prosesadas = foto

    return foto_prosesadas

#Aqui ca una funcion para prececir
def predict(foto_prosesadas):

    label = random.randint(0, 2)

    return label


class Detector(Resource):
    def get(self, foto):

        foto_procesada = preprocess(foto)

        int_label = predict(foto_procesada)

        label = "None"

        print(int_label)

        if int_label == 0:
            label ="No Accident"
        
        elif  int_label == 1:
            label ="Accident"

        elif  int_label == 2:
            label = "severe"

        return {'label': label}

api.add_resource(Detector, '/<string:foto>')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5005)